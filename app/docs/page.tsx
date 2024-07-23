"use client";

import { Listbox, ListboxItem } from "@nextui-org/listbox";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

import { title } from "@/components/primitives";

const accordionContent = [
  { idx: "0", title: "Guide" },
  { idx: "1", title: "Frameworks" },
  { idx: "2", title: "Customization" },
];

const sampleListItem = ["Themes", "Layout", "Colors", "Dark Mode"];

function List(item: any) {
  return (
    <Listbox
      disallowEmptySelection
      aria-label="Single selection example"
      variant="flat"
      selectionMode="single"
      // selectedKeys={}
      // onSelectionChange={}
    >
      {sampleListItem.map((curr, idx) => (
        <ListboxItem key={idx}>{curr}</ListboxItem>
      ))}
    </Listbox>
  );
}

export default function DocsPage() {
  return (
    <div className="float flex-row">
      <div>
        <h1 className={title()}>Docs</h1>
      </div>
      <div className="gap-10">
        <Accordion
          className="min-w-[350px] sm:min-w-[600px]"
          defaultExpandedKeys={["0"]}
          selectionMode="multiple"
        >
          {accordionContent.map((curr) => {
            return (
              <AccordionItem
                key={curr.idx}
                aria-label="Accordion 1"
                title={curr.title}
              >
                <List item={sampleListItem} />
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
