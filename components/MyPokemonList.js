import { useContext, useEffect, useState } from "react";
import { MyPokeListContext } from "../components/App";
import { css, jsx } from "@emotion/react";
import ErrorMessage from "../components/ErrorMessage";
import ListCard from "../components/ListCard";

export default function MyPokemonList() {
  const { state, dispatcher } = useContext(MyPokeListContext);

  const [myList, setMyList] = useState(state);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setMyList(state);
    setIsMounted(true);
  }, [state]);

  const myPokemons = myList !== null && isMounted;

  return (
    <section
      css={css`
        margin-bottom: 20px;
      `}
    >
      <ul
        css={css`
          flex-direction: row;
          max-width: 80vw;
          list-style: none;
          margin: auto;
          padding: 0;
          flex-wrap: wrap;
        `}
      >
        {!myPokemons && (
          <ErrorMessage message="You have no pokemon, catch them!" />
        )}
        {myPokemons &&
          myList.map(({ image, name, date, nick }, index) => (
            <li
              css={css`
                min-height: 184px;
                min-width: 250px;
                max-width: 660px;
                margin: 40px auto;
              `}
              key={index}
            >
              <div
                css={css`
                  border-radius: 10px;
                  display: block;
                  width: 100%;
                  position: relative;
                  padding: 20px
                  border-radius: 10px;
                  box-shadow:  -8px -8px 16px #d7b7a7,
                               8px 8px 16px #fff7e1;
                `}
              >
                <ListCard image={image} name={name} nick={nick} />
                <button
                  css={css`
                    width: 100%;
                    text-align: center;
                    outline: none;
                    justify-content: center;
                    flex-wrap: wrap-reverse;
                    display: flex;
                    cursor: pointer;
                    color: #f8593b;
                    border-width: 2px;
                    border-style: solid;
                    border-radius: 5px;
                    border-color: #fff;
                    background-color: #fff;
                    align-items: center;
                    &:hover {
                      color: #fff;
                      border: 2px solid #f8593b;
                      background-color: #f8593b;
                    }
                  `}
                  onClick={() => dispatcher.removePokemon(date)}
                >
                  <span
                    css={css`
                      vertical-align: middle;
                      padding: 10px;
                      margin-right: 20px;
                      line-height: 1;
                      font-size: 24px;
                      display: inline-block;
                      color: currentColor;
                    `}
                  >
                    Remove this Pokemon
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" />
                  </svg>
                </button>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}
