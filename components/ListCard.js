import { css, jsx } from "@emotion/react";
import Image from "next/image";

export default function ListCard({ name, image, nick }) {
  return (
    <div
      css={css`
        display: flex;
        flex-basis: 200px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
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
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-grow: 2;
          padding: 30px;
          background-color: #ffffff;
        `}
      >
        <h3
          css={css`
            font-family: sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 25px;
            color: #081f32;
            display: inline-block;
            width: 100%;
          `}
        >
          Name: {name}
        </h3>

        {nick && (
          <p
            css={css`
              font-style: normal;
              font-weight: 600;
              font-size: 20px;
              line-height: 15px;
              color: #6e798c;
              display: inline-block;
              width: 100%;
            `}
          >
            Nickname: {nick}
          </p>
        )}
      </div>
    </div>
  );
}
