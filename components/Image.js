import { css, jsx } from "@emotion/react";

const Image = ({ src, alt, width, height }) => {
  return (
    <div
      css={css`
        position: relative;
        display: block;
        padding: 0;
        overflow: hidden;
        width: ${width}px;
        height: ${height}px;
      `}
    >
      <img
        css={css`
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
          object-fit: cover;
          object-position: center;
        `}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default Image;
