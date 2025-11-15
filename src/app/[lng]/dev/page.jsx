"use client"
import Link from 'next/link'
import { Divider } from "@nextui-org/divider";
import ProjectCard from "../components/ProjectCard.jsx";
import { useTranslations } from 'next-intl';

export default function Work({ lng }) {
  const t = useTranslations();

  return (
    <main className="flex flex-row bg-beige min-h-screen">
      <div className="flex flex-col lg:w-5/6 lg:ml-36 lg:mt-16 mt-36 w-full space-y-10">

        <div className="grid grid-row h-52 px-8">
          <h1 className="text-navy font-extrabold text-4xl font-fraunces self-center overflow-auto">{t('projects-title')}</h1>
        </div>

        {/* Projects */}
        <div className="card-grid grid md:grid-cols-2 grid-cols-1 gap-12 p-6 justify-items-center">
          {[6, 5, 4, 3, 2, 1].map((item) => {
            return (
              <ProjectCard key={item} name={t('name')} lng={lng} projectNum={[item]} />
            );
          })}
        </div>

      </div>
    </main>
  );
}