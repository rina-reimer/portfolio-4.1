"use client"
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer({ lng }) {
  const t = useTranslations();

  return (
    <footer className="grid bg-yellow border-t-2 w-full border-navy content-center">

      <div className="grid md:grid-cols-2 grid-col md:px-32 px-4 py-4 content-center justify-between space-x-32">
        <div className='grid-col content-center'>
          <div className="font-fraunces text-2xl self-center">&copy; {t('name')}</div>
          <div className="grid-row font-fraunces text-lg text-maroon hover:text-red">
            <Link
              href="https://sketchfab.com/3d-models/strawhat-duck-f7a566abe0fa4cc8962e30aa5526dcb3"
              title="3D Model Link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Strawhat Duck by LiliumLetifer is licensed under CC BY 4.0"}
            </Link>
          </div>
        </div>

        <div className=''>
          <div className='flex py-4 justify-center text-lg'>{t('footer-desc')}</div>
          <div className="grid grid-cols-4 justify-items-center">
            <a href="mailto:rinareimer616@gmail.com" title="Email" target="_blank" rel="noopener noreferrer"><span className="ico-circle"><i className="bi bi-mailbox hover:text-red text-4xl"></i></span></a>
            <a href={`${lng}/Reimer_Resume.pdf`} title="Resume" target="_blank" rel="noopener noreferrer"><span className="ico-circle"><i className="bi bi-person-vcard-fill hover:text-red text-4xl"></i></span></a>
            <a href="https://www.linkedin.com/in/rina-reimer/" title="Rina-Reimer LinkedIn" target="_blank" rel="noopener noreferrer"><span className="ico-square"><i className="bi bi-linkedin hover:text-red text-4xl"></i></span></a>
            <a href="https://github.com/rina-reimer" title="Rina-Reimer Github" target="_blank" rel="noopener noreferrer"><span className="ico-circle"><i className="bi bi-github hover:text-red text-4xl"></i></span></a>
          </div>
        </div>
      </div>


    </footer>
  )
}