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

const listItemContent = [
  {
    title: "5 Unexpected Places to Find Inspiration for Your Next Project",
    date: "12/23/2023",
    img: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?cs=srgb&dl=pexels-sebastian-189349.jpg&fm=jpg",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi fuga corporis impedit, numquam veniam sint voluptatem accusamus et recusandae eaque mollitia sapiente minima magni asperiores dolor ad assumenda ea voluptate.",
  },
  {
    title: "Introvert's Guide to Thriving in an Extroverted World",
    date: "12/23/2023",
    img: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?cs=srgb&dl=pexels-sebastian-189349.jpg&fm=jpg",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi fuga corporis impedit, numquam veniam sint voluptatem accusamus et recusandae eaque mollitia sapiente minima magni asperiores dolor ad assumenda ea voluptate.",
  },
  {
    title: "From Mess to Masterpiece: How to Organize Your Creative Chaos",
    date: "12/23/2023",
    img: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?cs=srgb&dl=pexels-sebastian-189349.jpg&fm=jpg",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi fuga corporis impedit, numquam veniam sint voluptatem accusamus et recusandae eaque mollitia sapiente minima magni asperiores dolor ad assumenda ea voluptate.",
  },
  {
    title: "The Power of 'No': Why Setting Boundaries is Essential for Success",
    date: "12/23/2023",
    img: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?cs=srgb&dl=pexels-sebastian-189349.jpg&fm=jpg",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi fuga corporis impedit, numquam veniam sint voluptatem accusamus et recusandae eaque mollitia sapiente minima magni asperiores dolor ad assumenda ea voluptate.",
  },
  {
    title: "Sleepless in Seattle? Conquering City Life on a Budget",
    date: "12/23/2023",
    img: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?cs=srgb&dl=pexels-sebastian-189349.jpg&fm=jpg",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi fuga corporis impedit, numquam veniam sint voluptatem accusamus et recusandae eaque mollitia sapiente minima magni asperiores dolor ad assumenda ea voluptate.",
  },
  {
    title: "Don't Fake It 'Til You Make It: Embracing Your Authentic Self",
    date: "12/23/2023",
    img: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?cs=srgb&dl=pexels-sebastian-189349.jpg&fm=jpg",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi fuga corporis impedit, numquam veniam sint voluptatem accusamus et recusandae eaque mollitia sapiente minima magni asperiores dolor ad assumenda ea voluptate.",
  },
  {
    title: "Beyond the Filter: Finding Beauty in the Imperfect",
    date: "12/23/2023",
    img: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?cs=srgb&dl=pexels-sebastian-189349.jpg&fm=jpg",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi fuga corporis impedit, numquam veniam sint voluptatem accusamus et recusandae eaque mollitia sapiente minima magni asperiores dolor ad assumenda ea voluptate.",
  },
  {
    title: "The Art of the Side Hustle: Turning Your Passions into Profits",
    date: "12/23/2023",
    img: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?cs=srgb&dl=pexels-sebastian-189349.jpg&fm=jpg",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi fuga corporis impedit, numquam veniam sint voluptatem accusamus et recusandae eaque mollitia sapiente minima magni asperiores dolor ad assumenda ea voluptate.",
  },
  {
    title: "Adulting 101: Essential Life Skills You Never Learned in School",
    date: "12/23/2023",
    img: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?cs=srgb&dl=pexels-sebastian-189349.jpg&fm=jpg",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi fuga corporis impedit, numquam veniam sint voluptatem accusamus et recusandae eaque mollitia sapiente minima magni asperiores dolor ad assumenda ea voluptate.",
  },
];

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
          {listItemContent.map((curr: any, index: any) => (
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
