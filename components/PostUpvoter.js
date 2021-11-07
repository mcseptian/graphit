import { gql, useMutation } from '@apollo/client'
import styled from '@emotion/styled'

const UPDATE_POST_MUTATION = gql`
  mutation votePost($id: String!) {
    votePost(id: $id) {
      id
      votes
      __typename
    }
  }
`

export default function PostUpvoter({ votes, id }) {
  const [updatePost] = useMutation(UPDATE_POST_MUTATION)

  const upvotePost = () => {
    updatePost({
      variables: {
        id,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        votePost: {
          __typename: 'Post',
          id,
          votes: votes + 1,
        },
      },
    })
  }

  const Button = styled.button`
                      background-color: transparent;
                      border: 1px solid #e4e4e4;
                      color: #000;
                    &:active {
                      background-color: transparent;
                    }
                    &:before {
                      align-self: center;
                      border-color: transparent transparent #000000 transparent;
                      border-style: solid;
                      border-width: 0 4px 6px 4px;
                      content: '';
                      height: 0;
                      margin-right: 5px;
                      width: 0;
                    }
                  `

  return (
    <Button onClick={() => upvotePost()}>
      {votes}
    </Button>
  )
}
