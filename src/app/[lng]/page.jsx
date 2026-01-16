"use client"
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { ImageHover } from './components/ImageHover';

import { useTranslations } from 'next-intl';
import Link from 'next/link';


export default function Home() {
  const t = useTranslations();
  const [showProfile, setShowProfile] = useState(false);
  const [showData, setShowData] = useState(false);
  const [showDev, setShowDev] = useState(false);
  const [showSchool, setShowSchool] = useState(false);
  const [showWork, setShowWork] = useState(false);

  const pathname = usePathname();
  const lng = pathname.substring(0, 3);
  // const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col w-full items-center">
        {/* Hero Section */}
        <div className="flex flex-col w-4/5">
          <div className="flex flex-row w-full pt-[-40lvh] place-items-center">
            {/* hero text */}
            <div className="flex flex-col leading-[5dvw] px-2 w-full place-content-center xl:text-5xl md:text-3xl text-lg">
              <div className='flex flex-row space-x-[0.5dvw]'>
                <div className="text-dark">{t('hero')}</div>
                <div className="text-maroon hover:text-red hover:cursor-crosshair font-extrabold" onMouseEnter={() => setShowProfile(true)} onMouseLeave={() => setShowProfile(false)}>
                  <Link href={`${lng}/self`}>{t('name')}</Link>
                  <ImageHover show={showProfile} img_link={'/profile.jpeg'} alt_text={t('name')}></ImageHover>
                </div>
              </div>
              <div className='flex flex-row space-x-[0.5dvw]'>
                <div className="text-dark">{t('hero-2-1')}</div>
                <div className="text-maroon hover:text-red hover:cursor-crosshair font-extrabold" onMouseEnter={() => setShowData(true)} onMouseLeave={() => setShowData(false)}>
                  <Link href={`${lng}/data`}>{t('hero-2-2')}</Link>
                  <ImageHover show={showData} img_link={'/project-3.png'} alt_text={t('hero-2-2')}></ImageHover>
                </div>
                <div className="text-dark">{t('hero-2-3')}</div>
                <div className="text-maroon hover:text-red hover:cursor-crosshair font-extrabold" onMouseEnter={() => setShowDev(true)} onMouseLeave={() => setShowDev(false)}>
                  <Link href={`${lng}/dev`}>{t('hero-2-4')}</Link>
                  <ImageHover show={showDev} img_link={'/project-2.png'} alt_text={t('hero-2-4')}></ImageHover>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className="text-dark">{t('hero-2-5')}</div>
              </div>
              {/* grad and work info */}
              <div className="grid grid-rows-2 justify-between leading-10 w-full xl:text-xl md:text-lg text-sm">
                <div className='flex md:flex-row flex-col space-x-2'>
                  <div className="text-dark">{t('current-school')}</div>
                  <div className="text-maroon hover:text-red hover:cursor-crosshair font-extrabold" onMouseEnter={() => setShowSchool(true)} onMouseLeave={() => setShowSchool(false)}>
                    {t('curr-school')}
                    <ImageHover show={showSchool} img_link={'/grad.png'} alt_text={t('curr-school')}></ImageHover>
                  </div>
                </div>
                <div className='flex md:flex-row flex-col space-x-2'>
                  <div className="text-dark">{t('current-work')}</div>
                  <div className="text-maroon hover:text-red hover:cursor-crosshair font-extrabold" onMouseEnter={() => setShowWork(true)} onMouseLeave={() => setShowWork(false)}>
                    {t('curr-work')}
                    <ImageHover show={showWork} img_link={'/uw.png'} alt_text={t('curr-work')}></ImageHover>
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* <div>
              <ChevronDownIcon className="h-12 w-12 place-self-center text-navy animate-bounce" />
            </div> */}
        </div>
      </main>
    </div>
  );
}
