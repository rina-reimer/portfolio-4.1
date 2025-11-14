"use client"
import { useTranslations } from 'next-intl';

export default function Footer({ lng }) {
  const t = useTranslations();

  return (
    <footer className="grid  bg-yellow border-t-2 border-navy place-content-center">

      <div className="grid grid-cols-2 space-x-4 px-4 content-center">
        <div className="font-fraunces text-2xl self-center">&copy; {t('name')}</div>
        <div className="self-center py-4">
          <div className='py-4'>{t('footer-desc')}</div>
          <div className="grid grid-cols-3 justify-items-center">
            <a href="mailto:rinareimer616@gmail.com" title="Email" target="_blank" rel="noopener noreferrer"><span className="ico-circle"><i className="bi bi-mailbox text-4xl"></i></span></a>
            <a href="https://www.linkedin.com/in/rina-reimer/" title="Rina-Reimer LinkedIn" target="_blank" rel="noopener noreferrer"><span className="ico-square"><i className="bi bi-linkedin text-4xl"></i></span></a>
            <a href="https://github.com/rina-reimer" title="Rina-Reimer Github" target="_blank" rel="noopener noreferrer"><span className="ico-circle"><i className="bi bi-github text-4xl"></i></span></a>
          </div>
        </div>
      </div>


    </footer>
  )
}