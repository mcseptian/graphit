import App from "../components/App";
import InfoBox from "../components/InfoBox";
import Header from "../components/Header";
import Head from "next/head";
import PokemonList, {
  ALL_POKE_QUERY,
  pokemonsQueryVars,
} from "../components/PokemonList";
import { initializeApollo, addApolloState } from "../lib/apolloClient";

const IndexPage = () => (
  <App>
    <Head>
      <title>Pokemon List</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
        rel="stylesheet"
      />
      <link href="/global.css" rel="stylesheet" />
    </Head>
    <Header />
    <InfoBox>
      This page show a list of Pokemons' names and the owned total. Click on the
      list item to see Pokemon Detail.
    </InfoBox>
    <PokemonList />
  </App>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POKE_QUERY,
    variables: pokemonsQueryVars,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}

export default IndexPage;
