import { useState } from "react";
import Image from "next/image";
import { Tooltip, Button } from "@nextui-org/react";

export default function ToolboxIcon({ item, index, name }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Tooltip key={index} className="bg-dark text-light p-2 rounded-full" isOpen={isOpen} content={name}>

      <div className="flex relative h-16 aspect-square bg-light border-2 border-dark rounded-lg place-content-center">
        <Button
          className="h-14 w-14 bg-transparent"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          onPress={() => setIsOpen(!isOpen)}
          isIconOnly={true}
        >
          <Image src={`https://img.icons8.com/color/50/${item}.png`} fill={true} alt={item}></Image>
        </Button>
      </div>
    </Tooltip>
  );
}