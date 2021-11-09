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
        display: ${infoDisplay ? "block" : "none"};
        margin-top: 20px;
        margin-bottom: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-top: 1px solid #ececec;
        border-bottom: 1px solid #ececec;
      `}
    >
      {children}
      <button
        css={css`
          padding: 10px 20px;
          border-radius: 5px
          border-color: #fff;
          outline: none;
        `}
        onClick={handleClick}
      >
        Close
      </button>
    </div>
  );
};

export default InfoBox;
