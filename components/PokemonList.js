import { useEffect } from "react";
import { gql, useQuery, NetworkStatus } from "@apollo/client";
import ErrorMessage from "./ErrorMessage";
import { useRouter } from "next/router";

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
  limit: 2,
  offset: 0,
};

export default function PokemonList() {
  const router = useRouter();

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
        limit: 2,
        offset: pokemons.results.length,
      },
    });
  };

  return (
    <section>
      <ul>
        {pokemons.results.map(({ id, image, name }, index) => (
          <li key={index}>
            <div
              onClick={() =>
                router.push({
                  pathname: "/ssr/",
                  query: { pokename: name },
                })
              }
            >
              <span>{index + 1}. </span>
              <span>{name}</span>
            </div>
          </li>
        ))}
      </ul>
      {areMorePosts && (
        <button onClick={loadMorePosts} disabled={loadingMorePosts}>
          {loadingMorePosts ? "Loading..." : "Show More"}
        </button>
      )}
    </section>
  );
}
