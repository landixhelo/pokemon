import axios from "axios";
import React, { useEffect, useState } from "react";

const Pokemons = () => {
  const [responseData, setResponseData] = useState([]);
  const [isCalled, setIsCalled] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then((response) => {
        setResponseData(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  }, []);

  const callPokemon = () => {
    setIsCalled(!isCalled);
  };

  return (
    <>
      {responseData.map((pokemon, index) => {
        return <p key={index}> {pokemon.name}</p>;
      })}
      {error ? <p> {error}</p> : ""}
      <p>{JSON.stringify(isCalled)}</p>
      <button onClick={callPokemon}>Call pokemon</button>
    </>
  );
};

export default Pokemons;
