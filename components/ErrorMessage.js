import { css, jsx } from "@emotion/react";

export default function ErrorMessage({ message }) {
  return (
    <div
      css={css`
        padding: 10px 20px;
        outline: none;
        margin-top: 20px;
        color: #ffffff;
        border-width: 2px;
        border-style: solid;
        border-radius: 5px;
        border-color: #f8593b;
        background-color: #f8593b;
        &:hover {
          color: #f8593b;
          border: 2px solid #f8593b;
          background-color: #0000;
        }
      `}
    >
      {message}
    </div>
  );
}
