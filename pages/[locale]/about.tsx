import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import MainHeader from "../../components/navigation/Header";
import {Footer} from '../../components/navigation/Footer';
import AnimationTrigger from '../../components/AnimationTrigger';
import Arrow_Icon from '../../components/SVG/Arrow_Icon';
import { Meta } from '../../components/head/Meta';
import SocisList from '../../components/carousel/SocisList';
import { useTranslations } from 'next-intl';
import { GetStaticPaths, GetStaticProps } from 'next';

type AboutProps = { messages: any; locale: string };

export default function About(props: AboutProps) {
  const { locale } = props;
  const t = useTranslations('about');

  return (
    <main className='Main'>
     <AnimationTrigger />
      <div>
        <MainHeader useWhite={false} locale={locale}
          meta={<Meta 
          title={props.messages.meta.about.title}
          metaTitle={props.messages.meta.about.metaTitle}
          metaImg="https://idr.com/thumb/thumb.png"
          description={props.messages.meta.about.metaDescription} />} 
          />
      </div>

      <div className="HeroSectionWrap Dark" id="about-hero">
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

      <section className="SectionWrap" id="about-main">

        {/* RIGHT */}

        <div className="SideSection MiddleSpace">
          <div className="SideContent Right animation-up" data-animate="slide-up">
          
            <div className="SideImg">
              <div className='ImgWrap'>
                <Image className="radius-4" loading="eager" 
                alt="IDR" src='/img/img-curtidors.jpg' 
                  sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                  width={1200} height={400} />
              </div>
            </div>
            
            <div className="SideTxt">
              <p className='tagline'>{t('sections.who.tagline')}</p>
              <h3>{t('sections.who.title')}</h3>
              <p className='highlight'>
              {t('sections.who.highlight')}
              </p>
              <p>
              {t('sections.who.text1')}
              </p>
              <p>
              {t('sections.who.text2')}
              </p>
            </div>
          </div>

        </div>

        {/* LEFT */}

        <div className="SideSection">
          <div className="SideContent Left animation-up" data-animate="slide-up">
            <div className="SideTxt">
              <p className='tagline'>{t('sections.mission.tagline')}</p>
              <h3>{t('sections.mission.title')}</h3>
              <p>
              {t('sections.mission.text1')}
              </p>
              <p>
              {t('sections.mission.text2')}
              </p>
              <p>
              {t('sections.mission.text3')}
              </p>

          </div>

            <div className="SideImg">
              <div className='ImgWrap'>
                <Image className="radius-4"  
                // loading="eager" 
                alt="IDR" src='/img/img-pells3.jpg' 
                sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                width={1200} height={400} />
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* QUOTE */}

      <section className="SectionWrap Dark" id="about-quote">
        <div className="CenterSection">
            <div className="QuoteContent">
              <p className='tagline'>{t('sections.vision.tagline')}</p>
              <h4>
              {t('sections.vision.text')}
              </h4>
            </div>

        </div>
      </section>

      {/* COLLAB */}

      <section className="SectionWrap" id="about-collab">
        <div className="CenterSection">
          <div>
            <div className="CenterHeading animation-up" data-animate="slide-up">
              <div>
                <h2>{t('sections.collaborators.title')}</h2>
                <p>
                {t('sections.collaborators.text')}
                </p>
              </div>
            </div>
          </div>

          <div className="CardGroup Collab">

            <a href="https://leatherbarcelona.com/" target="blank">
              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardTop Collab1">
                <div className="CardImg">
                  <Image loading="eager" 
                  alt="img" src='/logos/cluster.png' width={250} height={200} />           
                </div>
                </div>
                <div className="CardBottom">
      
                  <div className="CardTxt">
                    <h6>{t('sections.collaborators.cards.cluster.title')}</h6>
                    <p className=''>
                    {t('sections.collaborators.cards.cluster.text')}
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://www.tradebe.com/environmental-services/" target="blank">
              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardTop Collab2">
                  <Image loading="eager" 
                    alt="img" src='/logos/tradebe.png' width={250} height={200} />           
                </div>
                <div className="CardBottom">
                  <div className="CardTxt">
                    <h6>{t('sections.collaborators.cards.tradebe.title')}</h6>
                    <p className=''>
                    {t('sections.collaborators.cards.tradebe.text')}
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://a3center.cat/index.php/en/" target="blank">
              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardTop Collab3">
                <Image loading="eager" 
                  alt="img" src='/logos/a3.png' width={250} height={200} />           
                </div>
                <div className="CardBottom">
                  <div className="CardTxt">
                    <h6>{t('sections.collaborators.cards.a3.title')}</h6>
                    <p className=''>
                    {t('sections.collaborators.cards.a3.text')}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          
          </div>
        </div>
      </section>

      {/* SOCIS  */}

      <section>
        <div className='Stripe Brown'></div>
      </section>

      <section className="SectionWrap" id="about-socis">
        <div className="CenterSection">
          <div className="CenterContent animation-up" data-animate="slide-up">
            <div className="CenterWrap">
              <h3>{t('sections.partners.title')}</h3>
              <div className="center-subtitle">
                <p>
                {t('sections.partners.text')}
                </p>
              </div>
              <div className="CenterWrap">
                <Image className="mt-5"  loading="eager" 
                  alt="IDR" src='/logos/aj-black.png' 
                  // sizes="(max-width: 480px) 200px, (max-width: 1024px) 300px, 400px"
                  width={250} height={50} />
                <p className='mt-3'>
                 {t('sections.partners.illustrious')}
                </p>
                
              </div>

              <SocisList />

            </div>
          </div>
        </div>
      </section>

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