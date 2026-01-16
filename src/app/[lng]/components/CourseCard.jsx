"use client"
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
import { useState } from "react";
import { useTranslations } from 'next-intl';

const CourseCard = ({ classNum, lng }) => {
  const t = useTranslations(`class${classNum}`);
  const [flip, setFlip] = useState(false);

  return (
    <div className={`card course-${classNum % 2} ${flip ? "flip" : ""} relative flex flex-col bg-gray h-48 w-full border-2 border-navy rounded-[32px] overflow-clip shadow-xl place-content-center`}>
      {/* ------------------------- FRONTSIDE ------------------------- */}
      <div className="front grid bg-gray space-y-3 place-content-center overscroll-contain" onClick={() => setFlip(!flip)}>
        {/* title */}
        <div className="px-4 h-fit">
          <div className="text-navy text-2xl font-fraunces font-black self-start">{t(`title`)}</div>
        </div>
      </div>
      {/* ------------------------- BACKSIDE ------------------------- */}
      <div className="back flex flex-col bg-gray max-h-48" onClick={() => setFlip(!flip)}>
        {/* dev stack */}
        <div className="flex flex-row p-2">
          {t.raw(`stack`).map((item, index) => {
            if (flip) {
              return (
                <Tooltip key={item} className="bg-navy text-gray p-2 rounded-full" content={t.raw(`stack-name`)[index]}>
                  <div className={`flex relative h-8 aspect-square bg-gray border-2 border-navy z-10 hover:z-20 rounded-full`}>
                    <Image src={`https://img.icons8.com/color/50/${item}.png`} fill={true} alt={`${item} icon`}></Image>
                  </div>
                </Tooltip>
              );
            } else {
              return (
                <div key={index} className={`flex relative h-8 aspect-square bg-gray border-2 border-navy z-10 hover:z-20 rounded-full`}>
                  <Image src={`https://img.icons8.com/color/50/${item}.png`} fill={true} alt={`${item} icon`}></Image>
                </div>
              );
            }
          })}
        </div>
        {/* desc */}
        <div className="p-2 lg:max-h-48 max-h-32 text-navy text-balance overflow-scroll overscroll-auto">
          {t(`desc`)}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;