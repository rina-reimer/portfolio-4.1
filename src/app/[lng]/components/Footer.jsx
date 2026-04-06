"use client"
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="grid  bg-yellow border-t-2 w-full border-navy">

      <div className="grid grid-cols-2 px-32 py-4 content-center justify-between space-x-32">
        <div className="font-fraunces text-2xl self-center">&copy; {t('name')}</div>
        <div className="self-center py-4">
          <div className='py-4'>{t('footer-desc')}</div>
          <div className="grid grid-cols-4 justify-items-center">
            <a href="mailto:rinareimer616@gmail.com" title="Email" target="_blank" rel="noopener noreferrer"><span className="ico-circle hover:text-red"><i className="bi bi-mailbox text-4xl"></i></span></a>
            <a href="/Reimer_Resume.pdf" title="Resume" target="_blank" rel="noopener noreferrer"><span className="ico-circle hover:text-red"><i className="bi bi-person-vcard-fill text-4xl"></i></span></a>
            <a href="https://www.linkedin.com/in/rina-reimer/" title="Rina-Reimer LinkedIn" target="_blank" rel="noopener noreferrer"><span className="ico-square hover:text-red"><i className="bi bi-linkedin text-4xl"></i></span></a>
            <a href="https://github.com/rina-reimer" title="Rina-Reimer Github" target="_blank" rel="noopener noreferrer"><span className="ico-circle hover:text-red"><i className="bi bi-github text-4xl"></i></span></a>
          </div>
        </div>
      </div>


    </footer>
  )
}