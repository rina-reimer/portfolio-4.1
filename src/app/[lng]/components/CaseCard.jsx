import { Tooltip, Button, Divider } from "@nextui-org/react";
import { useTranslations } from 'next-intl';
import Image from "next/image";

export default function CaseCard({ index }) {
  const t = useTranslations(`data${index}`);

  return (
    <div className="grid grid-cols-2 items-center p-8 space-x-8">
      <Image
        src={`/data-${index}.png`}
        alt={t('title')}
        width={430}
        height={200}
      />

      {/* Text Section */}
      <div className="grid-col gap-8 space-y-6">
        <a href={t('link')} title="Link to Education" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-row h-auto justify-between text-maroon hover:text-red">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{t('title')}</h1>
            <i className="bi bi-arrow-up-right text-4xl"></i>
          </div>
        </a>
        <p className="text-2xl md:text-3xl font-semibold text-orange">
          {t('date')}
        </p>
        <p className="text-lg md:text-xl w-full font-semibold leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw(`desc`) }}>
        </p>
      </div>
    </div>

  );
}