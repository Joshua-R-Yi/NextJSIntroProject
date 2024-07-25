"use client";

import { useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
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

const typeColors: any = {
  normal: "bg-neutral-200",
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
  dark: "bg-neutral-700",
  fairy: "bg-rose-500",
  unknown: "bg-gray-400",
  shadow: "bg-gray-400",
};

// Async function to fetch user input pokemon's json
const pokemon = async function (pkm: any) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkm}/`);

    if (!res.ok) {
      throw new Error(
        "The pokemon name or id that you entered does not exist. Try Again!",
      );
    }

    const pokemonData = await res.json();

    return pokemonData;
    // console.log(pokemonData);
  } catch (err: any) {
    // console.error(err);
    return false;
  }
};

export default function AboutPage() {
  // useState hooks for displaying
  // const [searchIsDisplayed, setSearchDisplay] = useState(true);
  const [pokemonIsDisplayed, setPokemonDisplay] = useState(false);
  const [identifier, setIdentifier] = useState();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // useState hooks for pokemon data
  const [id, setId] = useState<any>(-1);
  const [name, setName] = useState<any>("");
  const [pic, setPic] = useState<any>("");
  const [shinyPic, setShinyPic] = useState<any>("");
  const [types, setTypes] = useState<any>([]);
  const [moves, setMoves] = useState<any>([]);
  const [games, setGames] = useState<any>([]);
  const [height, setHeight] = useState<any>(-1);
  const [showErrorModal, setErrorModal] = useState<any>(false);

  // Handles change of id
  const handleIdChange = function (x: any) {
    setIdentifier(x.target.value.toLowerCase());
  };

  // Handles the submit button (updates all the states to help render)
  const handleClick = async function () {
    if (identifier == "") {
      onOpen();
    } else {
      const userPoke = await pokemon(identifier);

      if (userPoke == false) {
        setErrorModal(!showErrorModal);
        setPokemonDisplay(false);
        onOpen();

        return;
      }
      const tempName = await userPoke.name;

      console.log(userPoke);

      const adjustedName = tempName.replace(
        tempName[0],
        tempName[0].toUpperCase(),
      );

      setName(adjustedName);
      setPokemonDisplay(true);

      // Updates all the states of the pokemon data stats
      setPic(userPoke.sprites?.front_default);
      setId(userPoke?.id);
      setShinyPic(userPoke.sprites?.front_shiny);
      setTypes(userPoke?.types);
      setMoves(userPoke?.moves);
      setGames(userPoke?.game_indices);
      setHeight(userPoke?.height);

      // if (typeof types[0] !== "undefined") {
      //   color = types[0].type.name as string
      // }
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="sm:text-nowrap">
        <h1 className={title()}>Pokémon Basic Info Finder</h1>
      </div>
      <div>
        <div className="mt-5 flex flex-row justify-evenly items-center gap-2 sm:gap-10">
          <div>
            <h1>Search for Pokémon</h1>
            <Input
              isRequired
              className="sm:min-w-[250px]"
              label="ID or Name"
              placeholder="Pokemon ID or Name"
              type="text"
              value={identifier}
              onChange={handleIdChange}
            />
          </div>
          <div>
            <Button
              className="w-8"
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
        <Modal
          isDismissable={false}
          isKeyboardDismissDisabled={true}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Error!
                </ModalHeader>
                <ModalBody>
                  <p>Pokemon Name or ID does not exist. Try Again!</p>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <div>
        {pokemonIsDisplayed ? (
          <div className="flex flex-col justify-center items-center">
            <Card
              className={`min-w-[300px] min-h-[500px] sm:min-w-[800px] sm:min-h-[400px] ${typeColors[types[0].type.name as string]} `}
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
                <div className="flex flex-row gap-4 items-center justify-center">
                  <div>This Pokemon has the following types:</div>
                  {types.map((curr: any, idx: any) => {
                    return (
                      <Chip
                        key={idx}
                        className="min-w-[100px] items-center justify-center text-center"
                        size="md"
                      >
                        {curr.type.name}
                      </Chip>
                    );
                  })}
                </div>
                <div>
                  <h1>
                    This pokemon is {height * 10} centimeters or {height / 10}{" "}
                    meters tall
                  </h1>
                </div>
                <Divider />
                <div className="flex flex-row gap-4 flex-wrap items-center justify-center">
                  <div>This Pokemon has the following moves:</div>
                  <div className="flex flex-row gap-4 flex-wrap items-center justify-center">
                    {moves.map((curr: any, idx: any) => {
                      return (
                        <Chip
                          key={idx}
                          className="min-w-[140px] sm:min-w-[150px] items-center justify-center text-center"
                          size="md"
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
                    {games.map((curr: any, idx: any) => {
                      return (
                        <Chip
                          key={idx}
                          className="min-w-[150px] items-center justify-center text-center"
                          size="md"
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
