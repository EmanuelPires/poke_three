import React, { useState } from "react";

import "./App.css";
import { AddToList } from "./components/AddToList";
import { List } from "./components/List";
import { IPoke } from "./interface/Interface";

function App() {
  const [pokemon, setPokemon] = useState<IPoke["pokemon"]>([]);

  return (
    <div className="App">
      <h1>What are your Favoite Pokemons?</h1>
      <AddToList pokemon={pokemon} setPokemon={setPokemon} />
      <List pokemon={pokemon} />
    </div>
  );
}

export default App;
