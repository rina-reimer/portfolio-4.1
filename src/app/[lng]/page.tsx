"use client"
import { useState } from 'react';
import { ImageHover } from './components/ImageHover';

import { useTranslations } from 'next-intl';


export default function Home() {
  const t = useTranslations();
  const [showProfile, setShowProfile] = useState(false);
  const [showData, setShowData] = useState(false);
  const [showDev, setShowDev] = useState(false);
  const [showSchool, setShowSchool] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-light dark:bg-dark">
      <main className="flex flex-col w-full items-center">
        {/* Hero Section */}
        <div className="flex flex-col w-2/3">
          <div className="flex flex-row w-full pt-[-40lvh] place-items-center">
            {/* hero text */}
            <div className="flex flex-col leading-[5dvw] px-2 w-full place-content-center xl:text-5xl md:text-3xl text-lg">
              <div className='flex flex-row space-x-[0.5dvw]'>
                <div className="text-dark">{t('hero')}</div>
                <div className="text-maroon hover:text-red font-extrabold" onMouseEnter={() => setShowProfile(true)} onMouseLeave={() => setShowProfile(false)}>
                  {t('name')}
                  <ImageHover show={showProfile} img_link={'/profile.jpeg'} alt_text={t('name')}></ImageHover>
                </div>
              </div>
              <div className='flex flex-row space-x-[0.5dvw]'>
                <div className="text-dark">{t('hero-2-1')}</div>
                <div className="text-maroon hover:text-red font-extrabold" onMouseEnter={() => setShowData(true)} onMouseLeave={() => setShowData(false)}>
                  {t('hero-2-2')}
                  <ImageHover show={showData} img_link={'/project-3.png'} alt_text={t('hero-2-2')}></ImageHover>
                </div>
                <div className="text-dark">{t('hero-2-3')}</div>
                <div className="text-maroon hover:text-red font-extrabold" onMouseEnter={() => setShowDev(true)} onMouseLeave={() => setShowDev(false)}>
                  {t('hero-2-4')}
                  <ImageHover show={showDev} img_link={'/project-2.png'} alt_text={t('hero-2-4')}></ImageHover>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className="text-dark">{t('hero-2-5')}</div>
              </div>
              {/* grad and work info */}
              <div className="grid grid-cols-2 justify-between w-full text-xl">
                <div className='flex flex-row space-x-2'>
                  <div className="text-dark">{t('current-school')}</div>
                  <div className="text-maroon hover:text-red font-extrabold" onMouseEnter={() => setShowSchool(true)} onMouseLeave={() => setShowSchool(false)}>
                    {t('curr-school')}
                    <ImageHover show={showSchool} img_link={'/grad.png'} alt_text={t('curr-school')}></ImageHover>
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
