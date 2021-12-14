import React from "react";
export interface IPoke {
  pokemon: {
    name: string;
    sprites: {
      front_default: string;
      front_shiny: string;
    };
  }[];
}
