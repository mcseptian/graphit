import { css, jsx } from "@emotion/react";
import { useState } from "react";

const InfoBox = function ({ children }) {
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
      <button onClick={handleClick}>Close</button>
    </div>
  );
};

export default InfoBox;
