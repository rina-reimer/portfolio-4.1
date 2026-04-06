"use client"
import { Divider } from "@nextui-org/divider";
import CaseCard from "../components/CaseCard.jsx";
import { useTranslations } from 'next-intl';

export default function DataScience({ lng }) {
  const t = useTranslations();

  return (
    <main className="flex flex-row min-h-screen">
      <div className="flex flex-col mx-[10dvw] mt-36 w-full space-y-10">

        <div className="grid grid-row ml-[5dvw] h-52 px-8">
          <h1 className="text-navy font-extrabold text-4xl font-fraunces self-center overflow-auto">{t('data-title')}</h1>
          <Divider />
        </div>

        {/* Projects */}
        <div className="grid grid-col gap-12 p-6 justify-items-center">
          <Divider />
          {[2, 1].map((item) => {
            return (
              <CaseCard key={item} index={item} />
            );
          })}
        </div>
      </div>
    </main>
  );
}