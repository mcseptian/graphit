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
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
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
    setMyList(state);
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

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  if (error) return <ErrorMessage message="Error loading posts." />;

  if (loading && !loadingMorePosts) return <div>Loading</div>;

  const { pokemons } = data;

  const areMorePosts = pokemons.results.length < pokemons.count;

  const loadMorePosts = () => {
    fetchMore({
      variables: {
        limit: 20,
        offset: pokemons.results.length,
      },
    });
  };

  const listLength = myList && myList.length;

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
              border-radius: 10px;
              max-height: 184px;
              max-width: 660px;
            `}
            key={index}
          >
            <div
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
          {listLength && listLength >= 1
            ? `${listLength} pokemons`
            : `${listLength} pokemon`}{" "}
          on your list.
        </InfoBox>
      )}
      {areMorePosts && (
        <button
          css={css`
            padding: 10px 20px;
            border-radius: 5px
            border-color: #fff;
            outline: none;
            `}
          onClick={loadMorePosts}
          disabled={loadingMorePosts}
        >
          {loadingMorePosts ? "Loading..." : "Show More"}
        </button>
      )}
    </section>
  );
}
