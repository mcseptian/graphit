import { css, jsx } from "@emotion/react";
import Image from "./Image";

export default function DetailCard(props) {
  const { name, sprites, moves, types } = props.pokemon;
  const typeList = function (types) {
    const moveItem = types.map((type, index) => (
      <li
        key={index}
        css={css`
          text-transform: uppercase;
          padding: 10px;
          margin: 5px;
          line-height: 1;
          font-weight: 500;
          font-style: normal;
          font-size: 16px;
          font-family: "Zen Kaku Gothic Antique", sans-serif;
          display: inline-block;
          color: #6e798c;
          border-width: 2px;
          border-style: solid;
          border-radius: 5px;
          border-color: #ddd;
          &:hover {
            color: #fff;
            border-color: #6e798c;
            background-color: #6e798c;
          }
        `}
      >
        {type.type.name}
      </li>
    ));
    return (
      <ul
        css={css`
          width: 100%;
          height: auto;
          display: block;
        `}
      >
        <h2
          css={css`
            margin-top: 0;
            margin-bottom: 20px;
            font-weight: 500;
            font-style: normal;
            font-size: 20px;
            font-family: "Zen Kaku Gothic Antique", sans-serif;
          `}
        >
          Type:{" "}
        </h2>
        {moveItem}
      </ul>
    );
  };
  const moveList = function (moves) {
    const moveItem = moves.map((move, index) => (
      <li
        key={index}
        css={css`
          text-transform: uppercase;
          padding: 10px;
          margin: 5px;
          line-height: 15px;
          font-weight: 500;
          font-style: normal;
          font-size: 11px;
          font-family: "Zen Kaku Gothic Antique", sans-serif;
          display: inline-block;
          color: #6e798c;
          border-width: 2px;
          border-style: solid;
          border-radius: 5px;
          border-color: #ddd;
          &:hover {
            color: #fff;
            border-color: #6e798c;
            background-color: #6e798c;
          }
        `}
      >
        {move.move.name}
      </li>
    ));
    return (
      <ul
        css={css`
          width: 100%;
          height: auto;
          display: block;
        `}
      >
        <h2
          css={css`
            margin-top: 0;
            margin-bottom: 20px;
            font-weight: 500;
            font-style: normal;
            font-size: 20px;
            font-family: "Zen Kaku Gothic Antique", sans-serif;
          `}
        >
          Move:{" "}
        </h2>
        {moveItem}
      </ul>
    );
  };
  return (
    <div
      css={css`
        justify-content: space-between;
        flex-wrap: wrap;
        flex-direction: column;
        flex-basis: 100%;
        filter: drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.04));
        display: flex;
        align-items: center;
      `}
    >
      <div>
        <Image
          src={sprites.front_default}
          alt="name"
          width={300}
          height={300}
          layout="ratio"
        />
      </div>
      <div
        css={css`
          padding: 30px;
          justify-content: center;
          flex-direction: column;
          display: flex;
          background-color: #ffffff;
          align-items: center;
        `}
      >
        <div
          css={css`
            justify-content: center;
            flex-direction: column;
            display: flex;
            align-items: center;
          `}
        >
          <h2
            css={css`
              margin-top: 0;
              margin-bottom: 20px;
              font-weight: 500;
              font-style: normal;
              font-size: 20px;
              font-family: "Zen Kaku Gothic Antique", sans-serif;
            `}
          >
            Name:{" "}
          </h2>
          <h3
            css={css`
              text-transform: capitalize;
              margin-top: 0;
              margin-bottom: 15px;
              line-height: 25px;
              font-weight: normal;
              font-style: normal;
              font-size: 20px;
              font-family: "Ubuntu", sans-serif;
              color: #081f32;
            `}
          >
            {name}
          </h3>
        </div>
        {types && typeList(types)}
        {moves && moveList(moves)}
      </div>
    </div>
  );
}
