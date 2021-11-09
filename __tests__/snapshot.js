// __tests__/snapshot.js

import React from "react";
import { create } from "react-test-renderer";
import Home from "../pages/index";
import { MockedProvider } from "@apollo/client/testing";
import { InMemoryCache, gql } from "@apollo/client";

const cache = new InMemoryCache();
cache.writeQuery({
  query: gql`
    query pokemons($limit: Int, $offset: Int) {
      pokemons(limit: $limit, offset: $offset) {
        count
        next
        previous
        status
        message
        results {
          url
          name
          image
        }
      }
    }
  `,

  data: {
    pokemons: {
      count: 1118,
      next: "https://pokeapi.co/api/v2/pokemon/?offset=3&limit=2",
      previous: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1",
      status: true,
      message: "",
      results: [
        {
          url: "https://pokeapi.co/api/v2/pokemon/2/",
          name: "ivysaur",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/3/",
          name: "venusaur",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        },
      ],
    },
  },
});

const useRouter = jest.spyOn(require("next/router"), "useRouter");

it("renders homepage unchanged", () => {
  useRouter.mockImplementationOnce(() => ({
    pathname: "/my-list",
  }));

  const tree = create(
    <MockedProvider cache={cache}>
      <Home />
    </MockedProvider>
  );

  expect(tree.toJSON()).toMatchSnapshot();
});
