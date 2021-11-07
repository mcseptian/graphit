// __tests__/snapshot.js

import React from 'react'
import { create } from 'react-test-renderer'
import Home from '../pages/index'
import { MockedProvider } from '@apollo/client/testing'
import { InMemoryCache, gql } from '@apollo/client'
  
const cache = new InMemoryCache()
cache.writeQuery({
  query: gql`
    query Viewer {
      viewer {
        id
        name
        status
      }
    }
  `,
  data: {
    viewer: {
      __typename: 'User',
      id: 'Baa',
      name: 'Baa',
      status: 'Healthy',
    },
  },
})

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

it('renders homepage unchanged', () => {
  useRouter.mockImplementationOnce(() => ({
    pathname: '/client-only',
  }))

  const tree = create(
    <MockedProvider cache={cache}>
      <Home />
    </MockedProvider>
    )

  expect(tree.toJSON()).toMatchSnapshot()
})
