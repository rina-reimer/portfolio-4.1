import { Tooltip, Button, Divider } from "@nextui-org/react";
import Image from "next/image";

export default function CaseCard() {
  return (
    <div className="grid grid-cols-2 items-center p-8 space-x-8">
      <Image
        src="/project-1.png"
        alt="Colorful illustration with cartoon characters"
        width={430}
        height={200}
      />

      {/* Text Section */}
      <div className="gap-6">
        <div className="flex flex-row h-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Google Analytics Certificate
          </h1>
          <div className="h-[inherit] place-items-center">
            <a href="https://github.com/rina-reimer" title="Rina-Reimer Github" target="_blank" rel="noopener noreferrer"><span className="ico-circle hover:text-red align-self-center"><i className="bi bi-github text-4xl"></i></span></a>
          </div>
        </div>
        <p className="text-2xl md:text-3xl font-semibold text-maroon">
          November 2025
        </p>
        <p className="text-lg md:text-xl text-orange w-full font-semibold leading-relaxed">
          blah blah blah a redesign of GoodReads but shhhh we dont want them to know that we secretly call it BetterReads
        </p>
      </div>
    </div >
  );
}