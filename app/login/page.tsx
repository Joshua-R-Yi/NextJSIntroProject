"use client";

import { Button, Input } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/date-picker";
import { useState } from "react";
import { parseAbsoluteToLocal } from "@internationalized/date";

import { title } from "@/components/primitives";

export default function ContactPage() {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [id, setId] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState(
    parseAbsoluteToLocal("2021-04-07T18:45:22Z"),
  );
  // useEffect(()=>{
  //   fetch('http://127.0.0.1:3030/save?id='+id+'&username='+username+'&password='+password+'&birthday='+birthday)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     // console.log(data)
  //     // listItems = data
  //     // setListItems(data);
  //     // console.log(listItems)
  //   })
  // },[])

  const handleIdChange = function (x: any) {
    setId(x.target.value);
  };
  const handleUsernameChange = function (x: any) {
    setUsername(x.target.value);
  };
  const handlePasswordChange = function (x: any) {
    setPassword(x.target.value);
  };
  const handleBirthdayChange = function (x: any) {
    setBirthday(x);
  };

  const handleClick = function () {
    let _birthday = birthday.year + "-" + birthday.month + "-" + birthday.day;

    fetch(
      "http://127.0.0.1:3030/save?id=" +
        id +
        "&username=" +
        username +
        "&password=" +
        password +
        "&birthday=" +
        _birthday,
    )
      .then((res) => res.json())
      .then((data) => {});
  };

  return (
    <>
      <h1 className={title()}>Input Data</h1>
      <div className="flex flex-col gap-5 sm:min-w-[550px]">
        <div className="mt-5">
          <Input
            isRequired
            label="ID"
            placeholder="Enter your ID"
            type="number"
            value={id}
            onChange={handleIdChange}
          />
        </div>
        <div>
          <Input
            isRequired
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <Input
            isRequired
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(x) => {
              setPassword(x.target.value);
            }}
          />
        </div>
        <div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <DatePicker
              isRequired
              label="Birth date"
              value={birthday}
              onChange={setBirthday}
            />
          </div>
        </div>
        <div className="mt-5">
          {/* onPress={onOpen} */}
          <Button
            className="w-9"
            color="primary"
            size="lg"
            onClick={handleClick}
          >
            Submit
          </Button>
        </div>

        {/* <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
      </div>
    </>
  );
}
