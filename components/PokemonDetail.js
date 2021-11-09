import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import ErrorMessage from "./ErrorMessage";
import Submit from "./Submit";

export const POKE_QUERY = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
        back_default
        front_shiny
        back_shiny
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

export default function PokemonDetail({ name }) {
  const [displayDetail, setDisplayDetail] = useState(false);

  const pokemonsQueryVars = {
    name: name,
  };
  const { loading, error, data } = useQuery(POKE_QUERY, {
    variables: pokemonsQueryVars,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading posts." />;
  if (loading) return <div>Loading</div>;
  const handleClick = () => {
    setDisplayDetail(!displayDetail);
  };
  const { pokemon } = data;

  return (
    <section>
      <div>
        <span>{pokemon.url}</span>
        <a href={pokemon.url}>{pokemon.name}</a>
      </div>
      <button onClick={handleClick}>Catch</button>
      {displayDetail && <Submit pokemon={pokemon} />}
    </section>
  );
}
