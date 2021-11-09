import { ApolloProvider } from "@apollo/client";
import { useApollo, APOLLO_STATE_PROP_NAME } from "../lib/apolloClient";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  console.log(pageProps[APOLLO_STATE_PROP_NAME]);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
