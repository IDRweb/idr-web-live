import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import MainHeader from "../../components/navigation/Header";
import {Footer} from '../../components/navigation/Footer';
import AnimationTrigger from '../../components/AnimationTrigger';
import Arrow_Icon from '../../components/SVG/Arrow_Icon';
import { Meta } from '../../components/head/Meta';
import Table from '../../components/Table';
import Contact from '../../components/Contact';
import { useTranslations } from 'next-intl';
import { GetStaticPaths, GetStaticProps } from 'next';

type ServicesProps = { messages: any; locale: string };

export default function Services(props: ServicesProps) {
  const { locale } = props;
  const t = useTranslations('services');
  const messages = props.messages;

  return (
    <main className='Main'>
     <AnimationTrigger />
      <div>
        <MainHeader useWhite={false} locale={locale}
          meta={<Meta 
          title={messages.meta.services.title}
          metaTitle={messages.meta.services.metaTitle}
          metaImg="https://idr.com/thumb/thumb.png"
          description={messages.meta.services.metaDescription} />} 
          />
      </div>

      <div className="HeroSectionWrap Dark" id="services-hero">
          <div className="Overlay"></div>
        <div className="HeroSection">
          <div className="HeroContent animation-right" data-animate="slide-right">
            <div className='HeroTitle'>
              <h6>{t('hero.tagline')}</h6>
              <h2>{t('hero.title')}</h2>
            </div>
          </div>
        </div>

      </div>

      {/* MAIN SECTION */}

      <section className="SectionWrap" id="">

        {/* RIGHT */}

        <div className="SideSection MiddleSpace">
          <div className="SideContent Right animation-up" data-animate="slide-up">
          
            <div className="SideImg">
              <div className='ImgWrap'>
                <Image className="radius-4" loading="eager" 
                alt="IDR" src='/img/img-camio.jpg' 
                sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                width={1200} height={400} />
              </div>
            </div>
            
            <div className="SideTxt">
              <p className='tagline'>{t('sections.services.tagline')}</p>
              <h3>{t('sections.services.title')}</h3>
              <p className='highlight'>
              {t('sections.services.highlight')}
              </p>
              <p>
              {t('sections.services.text')}
              </p>
            </div>
          </div>

        </div>

        {/* LEFT */}

        <div className="SideSection">
          <div className="SideContent Left animation-up" data-animate="slide-up">
            <div className="SideTxt">
              <p className='tagline'>{t('sections.licenses.tagline')}</p>
              <h3>{t('sections.licenses.title')}</h3>
              <p className='highlight'>
              {t('sections.licenses.highlight')}
              </p>
              <p>
              {t('sections.licenses.text1')}
              </p>
              <p>
              {t('sections.licenses.text2')}
              </p>

          </div>

            <div className="SideImg">
              <div className='ImgWrap'>
                <Image className="radius-4"  
                // loading="eager" 
                alt="IDR" src='/img/img-gestio.jpg' 
                sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                width={1200} height={400} />
              </div>
            </div>
          </div>
        </div>

      </section>

  {/* CODIS LER */}

      <section>
        <div className='Stripe Green'></div>
      </section>

    <section className="SectionWrap" id="services-codes">
        <div className="CenterSection">
          <div className="CenterContent animation-up" data-animate="slide-up">
            <div className="CenterTxt">
              <h3>{t('sections.codes.title')}</h3>
              <div className="">
                <p>
                {t('sections.codes.text')}
                </p>
              </div>
            </div>

            <Table />

          </div>

        </div>
      </section>

    <div className='GradStripe'></div>


      <Contact />
 
      <Footer locale={locale} />

    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const locales = ['ca', 'es', 'en'];
  return {
    paths: locales.map(locale => ({ params: { locale } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locale = typeof params?.locale === 'string' ? params.locale : 'ca';
  const messages = (await import(`../../messages/${locale}.json`)).default;
  return {
    props: {
      messages,
      locale,
    },
  };
}; 