import { useState, useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { css, jsx } from "@emotion/react";
import { ModalContext } from "./App";
import ErrorMessage from "./ErrorMessage";
import Submit from "./Submit";
import DetailCard from "./DetailCard";

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
  const [catchable, setCatchable] = useState(false);

  const { modalState, modalDispatcher } = useContext(ModalContext);

  const { toggleModal } = modalDispatcher;

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
    setCatchable(true);
    if (catchable) {
      toggleModal();
      setCatchable(!catchable);
    }
  };

  const { pokemon } = data;

  return (
    <section
      css={css`
        margin-bottom: 20px;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        `}
      >
        <DetailCard pokemon={pokemon} />
      </div>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <button
          css={css`
            padding: 10px 20px;
            outline: none;
            font-weight: normal;
            font-style: normal;
            font-family: "Ubuntu", sans-serif;
            cursor: pointer;
            color: #ffffff;
            border-width: 2px;
            border-style: solid;
            border-radius: 5px;
            border-color: #f8593b;
            background-color: #f8593b;
            &:hover {
              color: #f8593b;
              border: 2px solid #f8593b;
              background-color: #0000;
            }
          `}
          onClick={handleClick}
        >
          Catch
        </button>
      </div>

      {modalState && <Submit pokemon={pokemon} />}
    </section>
  );
}
