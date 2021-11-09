import { css, jsx } from "@emotion/react";
import { useContext, useState, useEffect } from "react";
import { MyPokeListContext, ModalContext } from "./App";
import ErrorMessage from "./ErrorMessage";
import InfoBox from "./InfoBox";
import Link from "next/link";

export default function Submit({ pokemon, onChange }) {
  const { state, dispatcher } = useContext(MyPokeListContext);

  const { modalState, modalDispatcher } = useContext(ModalContext);

  const { id, sprites, name } = pokemon;

  const [value, setValue] = useState("");

  const [isFailed, setIsFailed] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
    setIsFailed(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nick = value;
    let pass = state === null;
    if (pass) {
      dispatcher.catchPokemon(id, sprites.front_default, name, nick);
      setIsSuccess(true);
    } else {
      state && state.some((val, i) => val.nick === nick)
        ? setIsFailed(true)
        : dispatcher.catchPokemon(id, sprites.front_default, name, nick);
    }
    setValue("");
    setIsSuccess(true);
  };

  useEffect(() => {
    setLoading(false);
  }, [state]);

  return (
    <div
      css={css`
        display: flex;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        lefft: 0;
        bottom: 0;
        justify-content: center;
        align-items: center;
        background-color: #fff8;
        backdrop-filter: blur(10px);
      `}
    >
      <form
        onSubmit={handleSubmit}
        css={css`
          position: relative;
          padding: 20px;
          margin-bottom: 20px;
          min-width: 250px;
          width: fit-content;
          max-width: 660px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 20px;
          background-color: #cbf5f2;
          box-shadow: 30px 30px 60px #add0ce, -30px -30px 60px #e9ffff;
        `}
      >
        <h1
          css={css`
            font-family: "Zen Kaku Gothic Antique", sans-serif;
            font-weight: 500;
            font-style: normal;
            font-size: 20px;
            line-height: 1.25;
            text-align: center;
          `}
        >
          Yeay, you catch {name}. You have to give it a nickname.
        </h1>
        <input
          css={css`
            font-family: "Zen Kaku Gothic Antique", sans-serif;
            font-weight: 500;
            font-style: normal;
            font-size: 20px;
            line-height: 1.25;
            padding: 10px 20px;
            outline: none;
            border-radius: 5px;
            margin-bottom: 10px;
            border-width: 2px;
            border-style: solid;
            border-color: #007ae9;
            min-width: 200px;
            max-width: 300px;
            width: 100%;
          `}
          placeholder="nickname"
          name="nickname"
          type="text"
          onChange={handleChange}
          value={value}
          required
        />
        <div
          css={css`
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            align-items: center;
          `}
        >
          <button
            css={css`
              font-family: "Ubuntu", sans-serif;
              font-style: normal;
              font-weight: normal;
              padding: 10px 20px;
              border-radius: 5px;
              border-width: 2px;
              border-color: #2ecc71;
              border-style: solid;
              color: #fff;
              outline: none;
              background-color: #2ecc71;
              &:hover {
                border: 2px solid #2ecc71;
                background-color: #0000;
                color: #2ecc71;
              }
            `}
            type="submit"
            disabled={loading}
          >
            Submit
          </button>
          <button
            css={css`
              position: absolute;
              top: 5px;
              right: 5px;
              border-radius: 50%;
              border-width: 2px;
              border-color: #fff;
              border-style: solid;
              color: #f8593b;
              outline: none;
              background-color: #fff;
              width: 34px;
              height: 34px;
              display: flex;
              align-items: center;
              justify-content: center;
              &:hover {
                border: 2px solid #f8593b;
                background-color: #f8593b;
                color: #fff;
              }
            `}
            type="reset"
            disabled={loading}
            onClick={() => modalDispatcher.toggleModal()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="currentColor"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </button>
        </div>

        {isFailed && (
          <ErrorMessage message="Nickname already taken, you have to pick another name" />
        )}

        {isSuccess && (
          <InfoBox>
            Yeay, you have your own pokemon. <br />
            Let's check them on your <Link href="/my-list">list</Link>.
          </InfoBox>
        )}
      </form>
    </div>
  );
}
