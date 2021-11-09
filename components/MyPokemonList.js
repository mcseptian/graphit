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
    <section>
      <ul>
        {!myPokemons && (
          <ErrorMessage message="You have no pokemon, catch them!" />
        )}
        {myPokemons &&
          myList.map(({ id, image, name, date, nick }, index) => (
            <li key={index}>
              <div>
                <ListCard image={image} name={name} nick={nick} />
                <button
                  css={css`
                    padding: 10px 20px;
                    border-radius: 5px
                    border-color: #fff;
                    outline: none;
                  `}
                  onClick={() => dispatcher.removePokemon(date)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}
