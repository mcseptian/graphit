import { useContext, useState, useEffect } from "react";
import { MyPokeListContext } from "../components/App";
import { gql, useQuery, NetworkStatus } from "@apollo/client";
import { useRouter } from "next/router";
import { css, jsx } from "@emotion/react";
import ErrorMessage from "./ErrorMessage";
import InfoBox from "./InfoBox";
import ListCard from "./ListCard";

export const ALL_POKE_QUERY = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) @connection(key: pokemons) {
      count
      next
      previous
      nextOffset
      prevOffset
      status
      message
      results {
        id
        name
        image
      }
    }
  }
`;

export const pokemonsQueryVars = {
  limit: 20,
  offset: 0,
};

export default function PokemonList() {
  const router = useRouter();

  const { state } = useContext(MyPokeListContext);

  const [myList, setMyList] = useState(state);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // setMyList(state);
    setIsMounted(true);
  }, [state]);

  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_POKE_QUERY,
    {
      variables: pokemonsQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    }
  );

  const loadingPosts = networkStatus === NetworkStatus.fetchMore;

  if (error) return <ErrorMessage message="Error loading posts." />;

  if (loading && !loadingPosts) return <div>Loading</div>;

  const { pokemons } = data;

  const nextPosts = pokemons.nextOffset !== 0;
  const prevPosts = pokemons.prevOffset !== 0;

  const loadPrevPosts = () => {
    fetchMore({
      variables: {
        offset: pokemons.prevOffset,
      },
    });
  };

  const loadNextPosts = () => {
    fetchMore({
      variables: {
        offset: pokemons.nextOffset,
      },
    });
  };

  return (
    <section
      css={css`
        margin-bottom: 20px;
      `}
    >
      <ul
        css={css`
          display: flex;
          flex-direction: column;
          max-width: 80vw;
          list-style: none;
          margin: auto;
          padding: 0;
        `}
      >
        {pokemons.results.map(({ id, image, name }, index) => (
          <li
            css={css`
              min-height: 184px;
              min-width: 250px;
              max-width: 660px;
              margin: 40px auto;
              width: 100%;
            `}
            key={index}
          >
            <div
              css={css`
                border-radius: 20px;
                background: linear-gradient(145deg, #e6e6e6, #ffffff);
                box-shadow: 15px 15px 30px #d9d9d9, -15px -15px 30px #ffffff;
              `}
              onClick={() =>
                router.push({
                  pathname: "/detail/",
                  query: { pokename: name },
                })
              }
            >
              <ListCard image={image} name={name} />
            </div>
          </li>
        ))}
      </ul>
      {isMounted && (
        <InfoBox>
          You have{" "}
          {myList && myList.Length > 1
            ? `${myList.length} pokemons`
            : `${myList.Length} pokemon`}{" "}
          } on your list.
        </InfoBox>
      )}
      <div
        css={css`
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-grow: 1;
        `}
      >
        {prevPosts && (
          <button
            css={css`
              padding: 10px 20px;
              outline: none;
              margin: 20px auto;
              margin: 20px auto;
              font-style: normal;
              font-family: "Ubuntu", sans-serif;
              display: block;
              cursor: pointer;
              border-style: solid;
              border-radius: 5px;
              border-color: #fff;
            `}
            onClick={loadPrevPosts}
            disabled={loadingPosts}
          >
            {loadingPosts ? "Loading..." : "Show Prev"}
          </button>
        )}
        {nextPosts && (
          <button
            css={css`
              padding: 10px 20px;
              outline: none;
              margin: 20px auto;
              font-style: normal;
              font-family: "Ubuntu", sans-serif;
              display: block;
              cursor: pointer;
              border-style: solid;
              border-radius: 5px;
              border-color: #fff;
            `}
            onClick={loadNextPosts}
            disabled={loadingPosts}
          >
            {loadingPosts ? "Loading..." : "Show Next"}
          </button>
        )}
      </div>
    </section>
  );
}
