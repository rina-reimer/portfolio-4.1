import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslations } from 'next-intl';
import ToolboxIcon from './ToolboxIcon.jsx';

const Toolbox = ({ lng }) => {
  const t = useTranslations();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 2000 },
      items: 9,
      slidesToSlide: 4
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 7,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4
    }
  };

  return (
    <div className='w-full justify-center flex flex-col space-y-4'>
      {/* languages */}
      <div>
        <h1 className='text-xl text-fraunces'>{t('languages')}</h1>
        <Carousel ssr itemClass="image-item"
          swipeable={true}
          draggable={true}
          responsive={responsive}>
          {t.raw(`langs`).map((item, index) => {
            return (
              <ToolboxIcon key={index} item={item} index={index} name={t.raw(`langs-name`)[index]} />
            );
          })}
        </Carousel>
      </div>


      {/* frameworks */}
      <div>
        <h1 className='text-xl'>{t('frameworks')}</h1>
        <Carousel ssr itemClass="image-item"
          swipeable={true}
          draggable={true}
          responsive={responsive}>
          {t.raw(`fmwks`).map((item, index) => {
            return (
              <ToolboxIcon key={index} item={item} index={index} name={t.raw(`fmwks-name`)[index]} />
            );
          })}
        </Carousel>
      </div>


      {/* etc */}
      <div>
        <h1 className='text-xl'>{t('other')}</h1>
        <Carousel ssr itemClass="image-item"
          swipeable={true}
          draggable={true}
          responsive={responsive}>
          {t.raw(`etc`).map((item, index) => {
            return (
              <ToolboxIcon key={index} item={item} index={index} name={t.raw(`etc-name`)[index]} />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Toolbox;