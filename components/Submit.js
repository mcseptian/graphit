import { css, jsx } from "@emotion/react";
import { useContext, useState, useEffect } from "react";
import { MyPokeListContext } from "../components/App";
import ErrorMessage from "../components/ErrorMessage";
import InfoBox from "./InfoBox";
import Link from "next/link";

export default function Submit({ pokemon }) {
  const { state, dispatcher } = useContext(MyPokeListContext);

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
    <form
      onSubmit={handleSubmit}
      css={css`
        padding: 20px;
        margin-bottom: 20px;
      `}
    >
      <h1
        css={css`
          font-size: 20px;
          line-height: 1.25;
        `}
      >
        Yeay, you catch {name}. You have to give it a nickname.
      </h1>
      <input
        placeholder="nickname"
        name="nickname"
        type="text"
        onChange={handleChange}
        value={value}
        required
      />
      <button
        css={css`
          padding: 10px 20px;
          border-radius: 5px
          border-color: #fff;
          outline: none;
        `}
        type="submit"
        disabled={loading}
      >
        Submit
      </button>

      {isFailed && (
        <ErrorMessage message="Nickname already taken, you have to pick another name" />
      )}

      {isSuccess && (
        <InfoBox>
          Yeay, you have your own pokemon. Let's check them on your list.
          <Link href="/my-list">
            <a>DETAIL</a>
          </Link>
        </InfoBox>
      )}
    </form>
  );
}
