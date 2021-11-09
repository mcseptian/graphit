import { css, jsx } from "@emotion/react";

export default function ErrorMessage({ message }) {
  return (
    <div
      css={css`
        margin-top: 20px;
        padding: 10px 20px;
        border-radius: 5px;
        border-width: 2px;
        border-color: #f8593b;
        border-style: solid;
        outline: none;
        color: #ffffff;
        background-color: #f8593b;
        &:hover {
          border: 2px solid #f8593b;
          background-color: #0000;
          color: #f8593b;
        }
      `}
    >
      {message}
    </div>
  );
}
