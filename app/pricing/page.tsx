"use client";

import { useState } from "react";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { ListboxItem, Listbox, ListboxSection } from "@nextui-org/listbox";
// import { ListboxWrapper } from "./ListboxWrapper";

import { title } from "@/components/primitives";

export default function PricingPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = function () {
    setIsLoading(!isLoading);
  };

  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className={title()}>Find the best plans</h1>
      </div>
      <div className="flex flex-col justify-evenly items-center gap-10 pt-10 sm:flex-row">
        <Card className="sm:min-w-[250px] sm:min-h-[550px] animate-appearance-in">
          <CardHeader className="flex flex-col items-center content-center">
            <h2 className="">Standard Service</h2>
            <Image
              className="max-w-full"
              height={200}
              src="https://www.shutterstock.com/image-vector/grunge-red-standard-wording-star-260nw-731515471.jpg"
              width={200}
            />
          </CardHeader>
          <CardBody>
            <h2>$0/Month</h2>
            <Listbox
              aria-label="Example with disabled actions"
              disabledKeys={["item1", "item2", "item3", "item4"]}
              onAction={(key) => alert(key)}
            >
              <ListboxItem key="item1">Feature 1</ListboxItem>
              <ListboxItem key="item2">Feature 2</ListboxItem>
            </Listbox>
          </CardBody>
          <CardFooter className="flex justify-center">
            <Button fullWidth isDisabled radius="full" className="animate">
              Free
            </Button>
          </CardFooter>
        </Card>

        <Card className="sm:min-w-[250px] sm:min-h-[550px] animate-appearance-in">
          <CardHeader className="flex flex-col">
            <h2>Premium Service</h2>
            <Image
              className="max-w-full"
              height={200}
              src="https://img.freepik.com/premium-vector/premium-icon-vector-illustration-design_535345-6533.jpg?w=360"
              width={200}
            />
          </CardHeader>
          <CardBody>
            <h2>$10/Month</h2>
            <Listbox
              aria-label="Example with disabled actions"
              disabledKeys={["item1", "item2", "item3", "item4"]}
              onAction={(key) => alert(key)}
            >
              <ListboxItem key="item1">Feature 1</ListboxItem>
              <ListboxItem key="item2">Feature 2</ListboxItem>
              <ListboxItem key="item3" className="text-success">
                Feature 3
              </ListboxItem>
            </Listbox>
          </CardBody>
          <CardFooter className="flex justify-center">
            <Button fullWidth radius="full" className="animate-pulse">
              Buy Now!
            </Button>
          </CardFooter>
        </Card>

        <Card className="sm:min-w-[250px] sm:min-h-[550px] animate-appearance-in">
          <CardHeader className="flex flex-col">
            <h2>Deluxe Service</h2>
            <Image
              className="max-w-full"
              height={200}
              src="https://as1.ftcdn.net/v2/jpg/01/94/29/28/1000_F_194292870_mGgqOlD9YivLxi8zm562zavUMU5K1Sre.jpg"
              width={200}
            />
          </CardHeader>
          <CardBody>
            <h2>$50/Month</h2>
            <Listbox
              aria-label="Example with disabled actions"
              disabledKeys={["item1", "item2", "item3", "item4"]}
              onAction={(key) => alert(key)}
            >
              <ListboxItem key="item1">Feature 1</ListboxItem>
              <ListboxItem key="item2">Feature 2</ListboxItem>
              <ListboxItem key="item3" className="text-success">
                Feature 3
              </ListboxItem>
              <ListboxItem key="item4" className="text-primary">
                Feature 4
              </ListboxItem>
              <ListboxItem key="item4" className="text-primary">
                Feature 5
              </ListboxItem>
            </Listbox>
          </CardBody>
          <CardFooter className="flex justify-center">
            {isLoading ? (
              <Button fullWidth isDisabled isLoading radius="full">
                Loading...
              </Button>
            ) : (
              <Button fullWidth radius="full" onClick={handleClick} className="animate-bounce">
                Contact Sales
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
