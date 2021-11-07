import { css, jsx } from '@emotion/react'

export default function ErrorMessage({ message }) {
  return (
    <aside css={css`
      aside {
        padding: 1.5em;
        font-size: 14px;
        color: white;
        background-color: red;
      }
    `}>
      {message}
    </aside>
  )
}
