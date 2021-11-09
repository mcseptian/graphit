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
        padding-top: 20px;
        padding-bottom: 20px;
        justify-content: center;
        flex-direction: column;
        display: ${infoDisplay ? "flex" : "none"};
        border-top: 1px solid #ececec;
        border-bottom: 1px solid #ececec;
        align-items: center;
      `}
    >
      <div
        css={css`
          text-align: left;
          padding: 20px 10px;
          margin-bottom: 20px;
          line-height: 26px;
          letter-spacing: 0.02em;
          font-weight: normal;
          font-style: normal;
          font-size: 28px;
          font-family: "Ubuntu", sans-serif;
          color: #1dabf2;
        `}
      >
        {children}
      </div>
      <button
        css={css`
          padding: 10px 20px;
          outline: none;
          font-weight: normal;
          font-style: normal;
          font-family: "Ubuntu", sans-serif;
          cursor: pointer;
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
        onClick={handleClick}
      >
        Close
      </button>
    </div>
  );
};

export default InfoBox;
