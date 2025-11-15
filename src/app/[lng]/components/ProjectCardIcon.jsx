import { useState } from "react";
import { Tooltip, Button } from "@nextui-org/react";
import Image from "next/image";

export default function ProjectCardIcon({item, index, name}) {
  const [isOpen, setIsOpen] = useState(false);

  return(
  <Tooltip key={index} className="bg-navy text-gray p-2 rounded-full" isOpen={isOpen} content={name}>
    <div key={index} className="flex relative h-full aspect-square bg-gray border-2 border-navy z-10 hover:z-20 rounded-full">
      <Button
              className="h-10 w-10 bg-transparent"
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