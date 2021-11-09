import { css, jsx } from "@emotion/react";
import Image from "next/image";

export default function DetailCard(props) {
  const { name, sprites, moves, types } = props.pokemon;
  const typeList = function (types) {
    const moveItem = types.map((type, index) => (
      <li
        key={index}
        css={css`
          text-transform: uppercase;
          font-family: sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 11px;
          line-height: 15px;
          display: inline-block;
          color: #6e798c;
          padding: 10px;
          border-radius: 5px;
          border-width: 2px;
          border-color: #ddd;
          border-style: solid;
          margin: 5px;
        `}
      >
        {type.type.name}
      </li>
    ));
    return (
      <ul
        css={css`
          display: block;
          width: 100%;
          height: auto;
        `}
      >
        <h2
          css={css`
            margin-bottom: 20px;
            margin-top: 0;
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
          font-family: sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 11px;
          line-height: 15px;
          display: inline-block;
          color: #6e798c;
          padding: 10px;
          border-radius: 5px;
          border-width: 2px;
          border-color: #ddd;
          border-style: solid;
          margin: 5px;
        `}
      >
        {move.move.name}
      </li>
    ));
    return (
      <ul
        css={css`
          display: block;
          width: 100%;
          height: auto;
        `}
      >
        <h2
          css={css`
            margin-bottom: 20px;
            margin-top: 0;
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
        display: flex;
        flex-basis: 100%;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        filter: drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.04));
      `}
    >
      <Image src={sprites.front_default} alt="name" width={300} height={300} />
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
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          `}
        >
          <h2
            css={css`
              margin-bottom: 20px;
              margin-top: 0;
            `}
          >
            Name:{" "}
          </h2>
          <h3
            css={css`
              font-family: sans-serif;
              font-style: normal;
              font-weight: normal;
              font-size: 20px;
              line-height: 25px;
              color: #081f32;
              margin-bottom: 15px;
              margin-top: 0;
              text-transform: capitalize;
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
