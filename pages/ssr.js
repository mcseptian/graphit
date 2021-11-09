import App from "../components/App";
import InfoBox from "../components/InfoBox";
import Header from "../components/Header";
import PokemonDetail, { POKE_QUERY } from "../components/PokemonDetail";
import Head from "next/head";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import router, { useRouter } from "next/router";

const pokemonQueryVar = router.query.pokename;

const SSRPage = function () {
  const { query } = useRouter();
  return (
    <App>
      <Head>
        <title>Pokemon Detail</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <InfoBox>
        This page show a picture of the Pokemon with its moves and types. There
        is a button to catch the Pokemon, you can give the Pokemon a nickname
        and add to your to `My Pokemon List’. You can catch the same pokemon
        multiple times but need to give a different nickname for each pokemon.
      </InfoBox>
      <PokemonDetail name={query.pokename} />
    </App>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: POKE_QUERY,
    variables: pokemonQueryVar,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default SSRPage;
