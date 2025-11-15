"use client"
import Image from "next/image";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import { Tooltip, Button } from "@nextui-org/react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { SparklesIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import ProjectCardIcon from "./ProjectCardIcon";

const ProjectCard = ({ name, projectNum, lng }) => {
  const t = useTranslations(`project${projectNum}`);
  const [flip, setFlip] = useState(false);
  const links = (t('github') !== "" ? 1 : 0) + (t('url') !== "" ? 1 : 0);
  const isLongTitle = t('title').length > 25;
  const hasLinks = links !== 0;
  const heightClass = isLongTitle && hasLinks ? 'h-[370px]' : 'h-[430px]';


  return (
    <div className={`card ${flip ? "flip" : ""} relative flex flex-col bg-gray h-[600px] w-[400px] border-2 border-navy rounded-[32px] overflow-clip shadow-xl`}>
      {/* ------------------------- FRONTSIDE ------------------------- */}
      <div className="front bg-gray space-y-3 justify-content-center" onClick={() => setFlip(!flip)}>
        {/* upper decoration */}
        <div className="flex flex-cols-4 w-full gap-2 pt-4 px-4">
          <SparklesIcon className="size-12 text-navy basis-1/12"></SparklesIcon>
          <div className="text-navy text-sm self-center basis-5/12">{name}</div>
          <Divider className="text-navy self-center border-1 border-navy basis-1/3"></Divider>
          <div className="text-navy lg:text-md text-sm self-center basis-1/6">no. 0{projectNum}</div>
        </div>
        {/* title */}
        <div className="grid px-4 h-16 w-full">
          <div className="text-navy text-3xl font-fraunces justify-self-start">{t(`title`)}</div>

        </div>
        {/* image */}
        <div className="flex flex-col relative w-[368px] mx-4 aspect-[3/2] border-2 border-navy rounded-[24px] self-end">
          <Image className="rounded-[24px]" src={`/project-${projectNum}.png`} fill={true} sizes="" alt={`Banner for my ${t('title')} project`} />
          {/* status */}
          <div className={`absolute flex w-1/3 h-1/6 rounded-full border-2 border-navy mr-[5%] mt-[-5%] ${t.raw(`active`) ? "bg-active" : "bg-inactive"} self-end place-content-center overflow-hidden`}>
            <div className="sm:text-xs text-sm self-center justify-center text-gray">{t.raw(`active`) ? "ACTIVE" : "INACTIVE"}</div>
          </div>
        </div>
        {/* self info */}
        <div className="flex flex-row h-16 gap-2 py-2 px-4">
          {/* role */}
          <div className="grid w-56 h-full rounded-full border-2 border-navy bg-yellow self-center overflow-clip">
            <div className="pl-1 text-base self-center justify-self-center text-navy">{t(`role`)}</div>
          </div>
          {/* dev stack */}
          <div className="flex flex-row -space-x-4">
            {t.raw(`stack`).map((item, index) => {
              return (
                <ProjectCardIcon key={index} item={item} index={index} name={t.raw(`stack-name`)[index]} />
              );
            })}
          </div>
        </div>
        {/* short desc */}
        <div className={`h-24 w-[368px] mx-4 p-2 border-2 border-navy rounded-[24px] text-navy overflow-scroll overscroll-auto`}>
          {t(`desc`)}
        </div>
      </div>
      {/* ------------------------- BACKSIDE ------------------------- */}
      <div className={`back grid grid-col ${flip ? "h-full" : "h-5"} bg-gray`} onClick={() => setFlip(!flip)}>
        {/* upper decoration */}
        <div className="flex flex-row gap-2 py-2">
          <SparklesIcon className="size-12 text-navy basis-1/12"></SparklesIcon>
          <div className="text-navy text-sm self-center basis-5/12">{name}</div>
          <Divider className="text-navy self-center border-1 border-navy basis-1/3"></Divider>
          <div className="text-navy lg:text-md text-sm self-center basis-1/6">no. 0{projectNum}</div>
        </div>
        {/* title */}
        <div className={`grid grid-cols-${links + 1} px-4 h-16 w-full`}>
          <div className="text-navy text-3xl font-fraunces justify-self-start">{t(`title`)}</div>
          {t('github') !== "" ?
            <Link className="grid relative justify-self-end h-12 aspect-square bg-gray border-2 border-navy rounded-full" href={t('github')} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github text-4xl place-self-center text-navy"></i>
            </Link> : null}
          {t('url') !== "" ?
            <Link className="grid relative justify-self-end h-12 aspect-square bg-gray border-2 border-navy rounded-full" href={t('url')} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-link-45deg text-4xl place-self-center text-navy"></i>
            </Link> : null}
        </div>
        {/* long desc */}
        <div className={`mx-4 mb-4 p-2 border-2 border-navy rounded-[24px] text-navy text-balance  ${flip ? `overflow-scroll overscroll-auto ${heightClass} self-end`
            : 'h-0 self-center overflow-hidden'}`}>
          <p dangerouslySetInnerHTML={{ __html: t.raw(`longdesc`) }}></p>
        </div>

      </div>

    </div>
  );
};

export default ProjectCard;
