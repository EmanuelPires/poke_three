import React from "react";
import { IPoke } from "../interface/Interface";

export const List: React.FC<IPoke> = ({ pokemon }) => {
  const pokeList = (): JSX.Element[] => {
    return pokemon.map((poke, key: number) => {
      return (
        <div key={key}>
          <span>{poke.name}</span>
          <img src={poke.sprites.front_shiny} />
          <img src={poke.sprites.front_default} />
        </div>
      );
    });
  };

  return <div>{pokeList()}</div>;
};
