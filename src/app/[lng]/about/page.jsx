"use client"
import { Divider } from "@nextui-org/divider";
import CourseCard from "../components/CourseCard.jsx";
import { useTranslations } from 'next-intl';
import Toolbox from "../components/Toolbox.jsx";

export default function Dev({ lng }) {
  const t = useTranslations();

  return (
    <main className="flex flex-row min-h-screen">
      <div className="flex flex-col px-[10dvw] mt-36 w-full space-y-10">

        <div className="grid grid-row pl-[5dvw] h-52 px-8">
          <div className="w-9/10 h-9/10 place-self-center border-2 border-dark ">
            <div className="bg-light p-4 mx-2 my-[-32] md:text-3xl text-xl absolute ">
              <h1>A Quick Look</h1>
            </div>

            <div className="flex flex-col align-center mt-8 ml-2 text-xl">
              {/* school */}
              <div className="flex flex-row">
                <div>{t('school')}</div>
                <div className='text-purple px-2'>
                  {t('curr-school')}
                </div>
              </div>

              {/* major */}
              <div className="flex flex-row">
                {t('major')}
                <div className='text-purple px-2'>
                  {t('curr-major')}
                </div>
              </div>

              {/* gpa */}
              <div className="flex flex-row">
                {t('gpa')}
                <div className='text-purple px-2'>
                  {t('gpa-score')}
                </div>
              </div>

              {/* location */}
              <div className="flex flex-row">
                {t('loc')}
                <div className='text-purple px-2'>
                  {t('curr-loc')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-content-center p-4 border-2 border-dark bg-yellow">
          <Toolbox />
        </div>

        {/* featured courses  */}
        <div className="w-full lg:px-8 px-16 py-10 space-y-10 justify-end">
          <div className="bg-light p-4 md:text-5xl text-2xl ">
            <h1>Academics</h1>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-16">
            {Array.from({ length: 13 }, (_, i) => i + 1).reverse().map((item) => {
              return (
                <CourseCard key={item} classNum={item}></CourseCard>
              );
            })}

          </div>
        </div>

      </div>
    </main>
  );
}