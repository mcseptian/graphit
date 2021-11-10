import { css, jsx } from "@emotion/react";
import { useState } from "react";

const Skeleton = ({ animation, radius, children }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div
      css={css`
        border-radius: ${radius};
        background-image: linear-gradient(
          270deg,
          #fafafa,
          #eaeaea,
          #eaeaea,
          #fafafa
        );
        background-size: 400% 100%;
        -webkit-animation: ${animation} 8s ease-in-out infinite;
        animation: ${animation} 8s ease-in-out infinite;
      `}
    >
      {children}
    </div>
  );
};

export default Skeleton;
