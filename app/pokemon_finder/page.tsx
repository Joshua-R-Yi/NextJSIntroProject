"use client";

import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { Avatar } from "@nextui-org/avatar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
// import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";

import { title } from "@/components/primitives";

const typeColors = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  electric: "bg-yellow-500",
  grass: "bg-green-500",
  ice: "bg-cyan-500",
  fighting: "bg-orange-500",
  poison: "bg-purple-500",
  ground: "bg-amber-700",
  flying: "bg-sky-500",
  psychic: "bg-pink-500",
  bug: "bg-lime-500",
  rock: "bg-stone-500",
  ghost: "bg-gray-500",
  steel: "bg-neutral-300",
  dragon: "bg-blue-300",
  dark: "bg-black-500",
  fairy: "bg-rose-500",
  unknown: "bg-gray-400",
  shadow: "bg-gray-400",
};

// Async function to fetch user input pokemon's json
const pokemon = async function (pkm: any) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkm}/`);

    if (!res.ok) {
      throw new Error("The pokemon name or id that you entered does not exist. Try Again!");
    }

    const pokemonData = await res.json();
    return pokemonData;
    // console.log(pokemonData);
  } catch (err) {
    console.error(err);
    alert(err.message);
    // renderError(`Something went wrong  ${err.message}`)
  }
};

export default function AboutPage() {
  // useState hooks for displaying
  // const [searchIsDisplayed, setSearchDisplay] = useState(true);
  const [pokemonIsDisplayed, setPokemonDisplay] = useState(false);
  const [identifier, setIdentifier] = useState();

  // useState hooks for pokemon data
  const [id, setId] = useState(-1);
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [shinyPic, setShinyPic] = useState("");
  const [types, setTypes] = useState([]);
  const [moves, setMoves] = useState([]);
  const [games, setGames] = useState([]);
  const [height, setHeight] = useState(-1);

  // Handles change of id
  const handleIdChange = function (x: any) {
    setIdentifier(x.target.value);
  };

  // Handles the submit button (updates all the states to help render)
  const handleClick = async function () {
    const userPoke = await pokemon(identifier);
    const tempName = await userPoke.name;
    const adjustedName = await tempName.replace(
      tempName[0],
      tempName[0].toUpperCase(),
    );

    setPokemonDisplay(true);
    setPic(userPoke.sprites.front_default);
    setId(userPoke.id);
    setName(adjustedName);
    setShinyPic(userPoke.sprites.front_shiny);
    setTypes(userPoke.types);
    setMoves(userPoke.moves);
    setGames(userPoke.game_indices);
    setHeight(userPoke.height);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="text-nowrap">
        <h1 className={title()}>Pokémon Basic Info Finder</h1>
      </div>
      <div>
        <div className="mt-5 flex flex-row justify-evenly items-center gap-10">
          <div>
            <h1>Search for Pokémon</h1>
            <Input
              isRequired
              label="ID or Name"
              placeholder="Pokemon ID or Name"
              type="text"
              value={identifier}
              className="min-w-[250px]"
              onChange={handleIdChange}
            />
          </div>
          <div>
            <Button
              className="w-9"
              color="primary"
              size="lg"
              onClick={handleClick}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      <div>
        {pokemonIsDisplayed ? (
          <div className="flex flex-col justify-center items-center">
            <Card
              className={`min-w-[300px] min-h-[500px] sm:min-w-[800px] sm:min-h-[400px] ${typeColors[types[0].type.name]} `}
            >
              <CardHeader className="flex flex-col">
                <h1 className="text-2xl font-bold text-center">
                  #{id} {name}
                </h1>
              </CardHeader>
              <CardBody className="flex flex-col justify-center items-center gap-5">
                <h1>The Pokemon You Selected</h1>
                <Avatar
                  // isBordered
                  className="w-60 h-60 text-large"
                  color="default"
                  src={pic}
                />
                <h1>The shiny version</h1>
                <Avatar
                  // isBordered
                  className="w-60 h-60 text-large"
                  color="default"
                  src={shinyPic}
                />
                <div className="flex flex-row gap-4">
                  This Pokemon has the following types:
                  {types.map((curr, idx) => {
                    return (
                      <Chip
                        size="md"
                        className="min-w-[100px] items-center justify-center text-center"
                        key={idx}
                      >
                        {curr.type.name}
                      </Chip>
                    );
                  })}
                </div>
                <div>
                  <h1>This pokemon is {height * 10} centimeters or {height/10} meters tall</h1>
                </div>
                <Divider />
                <div className="flex flex-row gap-4 flex-wrap">
                  This Pokemon has the following moves:
                  <div className="flex flex-row gap-4 flex-wrap">
                    {moves.map((curr, idx) => {
                      return (
                        <Chip
                          size="md"
                          className="min-w-[150px] items-center justify-center text-center"
                          key={idx}
                        >
                          {curr.move.name}
                        </Chip>
                      );
                    })}
                  </div>
                </div>
                <Divider />
                <div className="flex flex-row gap-4 flex-wrap">
                  This Pokemon is found in the following games:
                  <div className="flex flex-row gap-4 flex-wrap items-center justify-center">
                    {games.map((curr, idx) => {
                      return (
                        <Chip
                          size="md"
                          className="min-w-[150px] items-center justify-center text-center"
                          key={idx}
                        >
                          {curr.version.name}
                        </Chip>
                      );
                    })}
                  </div>
                </div>
              </CardBody>
              <Divider />
              <CardFooter className="flex justify-center">
                <></>
              </CardFooter>
            </Card>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
