import { css, jsx } from "@emotion/react";
import Image from "next/image";

export default function DetailCard(props) {
  const { id, name, sprites, moves, types } = props.pokemon;
  const typeList = function (types) {
    const moveItem = types.map((type, index) => (
      <li
        key={index}
        css={css`
          font-style: normal;
          font-weight: 600;
          font-size: 11px;
          line-height: 15px;
          display: inline-block;
          color: #6e798c;
          padding: 10px;
          border-radius: 5px;
          border-width: 2px;
          border-color: #282828;
          border-style: solid;
          margin: 5px;
        `}
      >
        Type: {type.type.name}
      </li>
    ));
    return <ul>{moveItem}</ul>;
  };
  const moveList = function (moves) {
    const moveItem = moves.map((move, index) => (
      <li
        key={index}
        css={css`
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
    return <ul> Move: {moveItem}</ul>;
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
      <Image src={sprites.front_default} alt="name" width={500} height={500} />
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
        {types && typeList(types)}
        {moves && moveList(moves)}
      </div>
    </div>
  );
}
