import { css, jsx } from "@emotion/react";
import { useState } from "react";

const InfoBox = ({ children }) => {
  const [infoDisplay, setInfoDisplay] = useState(true);

  const handleClick = () => {
    setInfoDisplay(false);
  };

  return (
    <div
      css={css`
        display: ${infoDisplay ? "flex" : "none"};
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 20px;
        padding-bottom: 20px;
        border-top: 1px solid #ececec;
        border-bottom: 1px solid #ececec;
      `}
    >
      <div
        css={css`
          font-family: "Ubuntu", sans-serif;
          font-style: normal;
          margin-bottom: 20px;
          font-weight: normal;
          font-size: 28px;
          line-height: 26px;
          text-align: left;
          color: #1dabf2;
          padding: 20px 10px;
          letter-spacing: 0.02em;
        `}
      >
        {children}
      </div>
      <button
        css={css`
          font-family: "Ubuntu", sans-serif;
          font-style: normal;
          font-weight: 400;
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
        onClick={handleClick}
      >
        Close
      </button>
    </div>
  );
};

export default InfoBox;
