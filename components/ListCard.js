import { css, jsx } from "@emotion/react";
import Image from "next/image";

export default function ListCard({ name, image, nick }) {
  return (
    <div
      css={css`
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row;
        flex-basis: 200px;
        display: flex;
        cursor: pointer;
        align-items: center;
      `}
    >
      <div
        css={css`
          position: static;
        `}
      >
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          layout="intrinsic"
        />
      </div>
      <div
        css={css`
          padding: 30px;
          justify-content: center;
          flex-grow: 2;
          flex-direction: column;
          display: flex;
          background-color: #0000;
          align-items: center;
        `}
      >
        <h3
          css={css`
            width: 100%;
            line-height: 25px;
            font-weight: 500;
            font-style: normal;
            font-size: 24px;
            font-family: "Zen Kaku Gothic Antique", sans-serif;
            display: inline-block;
            color: #081f32;
          `}
        >
          Name: {name}
        </h3>

        {nick && (
          <p
            css={css`
              width: 100%;
              line-height: 15px;
              font-weight: 500;
              font-style: normal;
              font-size: 20px;
              font-family: "Zen Kaku Gothic Antique", sans-serif;
              display: inline-block;
              color: #6e798c;
            `}
          >
            Nickname: {nick}
          </p>
        )}
      </div>
    </div>
  );
}
