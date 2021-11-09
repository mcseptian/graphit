import { useContext, useEffect, useState } from "react";
import { MyPokeListContext } from "../components/App";
import ErrorMessage from "../components/ErrorMessage";

export default function MyPokemonList() {
  const { state, dispatcher } = useContext(MyPokeListContext);
  const [myList, setMyList] = useState(state);

  useEffect(() => {
    setMyList(state);
  }, [state]);

  const myPokemons = myList !== null;

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
                <span>{index + 1}. </span>
              </div>
              <button onClick={() => dispatcher.removePokemon(date)}>
                Remove
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
}
