import { css, jsx } from "@emotion/react";

export default function ErrorMessage({ message }) {
  return (
    <div
      css={css`
        padding: 1.5em;
        font-size: 14px;
        color: white;
        background-color: red;
      `}
    >
      {message}
    </div>
  );
}
