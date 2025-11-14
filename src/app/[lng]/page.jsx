"use client"


import { useTranslations } from 'next-intl';


export default function Home() {
  const t = useTranslations();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="bg-beige flex flex-row min-h-screen">

        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <div className="flex flex-col lg:h-dvh h-lvh">
            <div className="flex flex-row lg:w-5/6 w-full h-[90%] lg:ml-36 pt-36 lg:place-items-center">
              {/* hero text */}
              <div className="flex flex-col md:w-2/3 space-y-2 pr-8 w-full place-content-center">
                <div className='flex flex-row'>
                  <div className="text-dark py-2">{t('hero')}</div>
                  <div className="text-maroon hover:text-red font-extrabold">{t('name')}</div>
                </div>
                <div className='flex flex-row'>
                  <div className="text-dark py-2">{t('hero-2-1')}</div>
                  <div className="text-maroon hover:text-red font-extrabold">{t('hero-2-2')}</div>
                  <div className="text-dark py-2">{t('hero-2-3')}</div>
                  <div className="text-maroon hover:text-red font-extrabold">{t('hero-2-4')}</div>
                </div>
                <div className='flex flex-row'>
                  <div className="text-dark py-2">{t('hero-2-5')}</div>
                </div>
                <div className="text-navy pb-8">{t('abt1')}</div>
                {/* grad and work info */}
                <div className="grid grid-cols-2 justify-between w-full">

                </div>

              </div>
            </div>
            {/* <div>
              <ChevronDownIcon className="h-12 w-12 place-self-center text-navy animate-bounce" />
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
