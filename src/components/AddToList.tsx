import React, { useState } from "react";
import { IPoke } from "../interface/Interface";

import axios from "axios";
interface IState {
  pokemon: IPoke["pokemon"];
  setPokemon: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        sprites: {
          front_default: string;
          front_shiny: string;
        };
      }[]
    >
  >;
}
export const AddToList: React.FC<IState> = ({ pokemon, setPokemon }) => {
  const [input, setInput] = useState({
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!input.name) {
      return;
    } else {
      let res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/" + input.name
      );

      setPokemon([...pokemon, res.data]);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Poke Name"
        onChange={handleChange}
        name="name"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
