"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import { Avatar } from "@nextui-org/avatar";

import React from "react";
import { Button } from "@nextui-org/button";
// import Button1 from "./Button1";
import { useState, useEffect } from "react";

import { title } from "@/components/primitives";

function getData() {
  const res = fetch("http://127.0.0.1:3030/list");
  return res;
}

export default function BlogPage() {
  // const listItems = await getData();
  // const listItems = [];
  const [listItems, setListItems] = useState([]);

  const [isClicked, setClicked] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:3030/list")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        // listItems = data
        setListItems(data);
        // console.log(listItems)
      });

    // const listItems = await getData();
  }, []);

  const handleClick = () => {
    setClicked(!isClicked);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className={title()}>Blog</h1>
      <div className="flex flex-col gap-[50px] pt-10 sm:flex-row sm:items-start sm:justify-start">
        <div className="sm:sticky sm:top-[70px]">
          <Card className="min-w-[100px] min-h-[200px] sm:min-w-[200px] sm:min-h-[400px]">
            <CardHeader className="flex justify-center">
              <Avatar
                isBordered
                className="w-20 h-20 text-large"
                color="primary"
                src="https://seeklogo.com/images/E/elmo-logo-C6760C26BB-seeklogo.com.png"
              />
            </CardHeader>
            <CardBody className="">
              <h1 className="text-2xl font-bold text-center"> Profile</h1>
              <p>This is a paragraph</p>
            </CardBody>
            <Divider />
            <CardFooter className="flex justify-center">
              {isClicked ? (
                <Button color="danger" radius="md" onClick={handleClick}>
                  Unfollow
                </Button>
              ) : (
                <Button color="primary" radius="md" onClick={handleClick}>
                  Follow
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col gap-10 ">
          {listItems.map((curr: any, index: any) => (
            <div key={index}>
              <Card
                isHoverable
                isPressable
                className="min-w-[100px] min-h-[200px] sm:min-w-[1000px] sm:min-h-[300px]sm:flex sm:flex-row sm:gap-[10px] animate-appearance-in"
              >
                <div>
                  <CardHeader>
                    <Image
                      isBlurred
                      isZoomed
                      className="max-w-full"
                      height={200}
                      src={curr.img}
                      width={600}
                    />
                  </CardHeader>
                </div>
                <div className="flex">
                  <CardBody>
                    <h1 className="text-3xl font-bold">{curr.title}</h1>
                    <h3>{curr.date}</h3>
                    <p>{curr.details}</p>
                  </CardBody>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
