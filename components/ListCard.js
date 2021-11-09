import { css, jsx } from "@emotion/react";
import Image from "next/image";

export default function ListCard({ name, image, nick }) {
  return (
    <div
      css={css`
        display: flex;
        flex-basis: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        filter: drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.04));
      `}
    >
      <Image src={image} alt="name" width={500} height={500} />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 30px;
          background-color: #ffffff;
        `}
      >
        <h3
          css={css`
            font-family: sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 25px;
            color: #081f32;
          `}
        >
          {name}
        </h3>

        {nick && (
          <p
            css={css`
              font-style: normal;
              font-weight: 600;
              font-size: 11px;
              line-height: 15px;
              color: #6e798c;
            `}
          >
            {nick}
          </p>
        )}
      </div>
    </div>
  );
}
