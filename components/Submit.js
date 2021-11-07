import { gql, useMutation } from '@apollo/client'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/react'

const CREATE_POST_MUTATION = gql`
  mutation createPost($title: String!, $url: String!) {
    createPost(title: $title, url: $url) {
      id
      title
      votes
      url
      createdAt
    }
  }
`

export default function Submit() {
  const [createPost, { loading }] = useMutation(CREATE_POST_MUTATION)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const formData = new window.FormData(form)
    const title = formData.get('title')
    const url = formData.get('url')
    form.reset()

    createPost({
      variables: { title, url },
      update: (cache, { data: { createPost } }) => {
        cache.modify({
          fields: {
            allPosts(existingPosts = []) {
              const newPostRef = cache.writeFragment({
                data: createPost,
                fragment: gql`
                  fragment NewPost on allPosts {
                    id
                    type
                  }
                `,
              })
              return [newPostRef, ...existingPosts]
            },
          },
        })
      },
    })
  }

  const Input = styled.input`
    display: block;
    margin-bottom: 10px;
  `
  return (
    <form onSubmit={handleSubmit} css={css`
      border-bottom: 1px solid #ececec;
      padding-bottom: 20px;
      margin-bottom: 20px;
    `}>
      <h1 css={css`
          font-size: 20px;
        `}>Submit</h1>
      <Input placeholder="title" name="title" type="text" required />
      <Input placeholder="url" name="url" type="url" required />
      <button type="submit" disabled={loading}>
        Submit
      </button>
    </form>
  )
}
