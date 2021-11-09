import App from "../components/App";
import InfoBox from "../components/InfoBox";
import Header from "../components/Header";
import Head from "next/head";
import MyPokemonList from "../components/MyPokemonList";

const ClientOnlyPage = () => (
  <App>
    <Head>
      <title>My Pokemon List </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <InfoBox>
      This page show a list of all Pokemons you have caught. You could also
      remove/release a Pokemon from the list. The pokemons in this list persist
      even after a full page <a href="/my-list">reload</a> .
    </InfoBox>
    <MyPokemonList />
  </App>
);

export default ClientOnlyPage;
