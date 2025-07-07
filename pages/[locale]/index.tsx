import React, { useEffect, useState, FunctionComponent } from 'react';
import useMediaQuery from "../../hooks/useMediaQuery";
import Image from "next/image";
import Link from 'next/link';
import MainHeader from "../../components/navigation/Header";
import {Footer} from '../../components/navigation/Footer';
import AnimationTrigger from '../../components/AnimationTrigger';
import Arrow_Icon from '../../components/SVG/Arrow_Icon';
import { Meta } from '../../components/head/Meta';
import ImgCarousel from '../../components/carousel/ImgCarousel';
import RecentPosts from '../../components/blog/RecentPosts';
import { GetStaticPaths, GetStaticProps } from 'next';
import { BlogArchiveConfig, Config } from '../../utils/Config';
import { getAllPosts, getCategoryCollection, PostItems } from '../../utils/Content';
import { useTranslations } from 'next-intl';


type IIndexProps = {
  initialPosts: PostItems[];
  allPosts: PostItems[];
  messages: any;
  locale: string;
};

export default function Home(props: IIndexProps) {
// export default function Home() {
  const isMobile = useMediaQuery('(max-width: 480px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isWide = useMediaQuery('(min-width: 1800px)');
  const { allPosts, initialPosts, messages } = props;
  const t = useTranslations('home');

  return (
    <main className='Main'>
     <AnimationTrigger />
      <div>
        <MainHeader useWhite={false}
          meta={<Meta 
          title={messages.meta.home.title}
          metaTitle={messages.meta.home.metaTitle}
          metaImg="https://idr.com/thumb/thumb.png"
          description={messages.meta.home.metaDescription} />} 
          locale={props.locale}
        />
      </div>

      <div className="HeroSectionWrap Dark" id="main-hero">
          {/* <video
             className="HeroVideo"
             muted
             loop
             playsInline
             autoPlay
             src="/video/video-hero.mp4"
             poster="/video/video-poster.jpg"
           ></video> */}
          <div className='hero-video-container'>
            <iframe
              src="https://player.vimeo.com/video/1098597684?h=13e07d9db1&autoplay=1&muted=1&background=1&controls=0&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; encrypted-media; web-share"
              className="HeroVideo"
              title="IDR"
            />
          </div>

          <div className="Overlay"></div>
        <div className="HeroSection Main">
          <div className="MainHeroContent animation-up" data-animate="slide-up">
            <h1>{t('title')}</h1>
            <h6 className=''>{t('subtitle')}</h6>
          </div>
        </div>

      </div>


    {/* LA PLANTA */}

    <section className="SectionWrap" id="main-tech">
        <div className="CenterSection">
          <div className="CenterContent">
            <div className="CenterTxt animation-up" data-animate="slide-up">
              <h3>{t('sections.tech.title')}</h3>
              <div className="TextGroup">
                <div className="HalfText">
                  <p className='highlight'>
                  {t('sections.tech.highlight1')}
                  </p>
                  <p>
                  {t('sections.tech.text1')}
                  </p>
                  </div>
                  <div className="HalfText">
                  <p className='highlight'>
                  {t('sections.tech.highlight2')}
                  </p>
                  <p>
                  {t('sections.tech.text2')}
                  </p>
                </div>
              </div>

             <div className="AppBtn Black">
               <Link href={`/${props.locale}/laplanta`}><button>{t('sections.tech.button')}<Arrow_Icon /></button></Link>
             </div>
            </div>

            <div className="Video">
              {/* <video playsInline controls
              
              src="video/hero-video.mp4">
              </video> */}
              
              <div
                style={{
                  padding: '56.25% 0 0 0',
                  position: 'relative',
                }}
              >
                <iframe
                  src={
                    props.locale === 'es'
                      ? 'https://player.vimeo.com/video/1097862706'
                      : props.locale === 'en'
                      ? 'https://player.vimeo.com/video/1097861127'
                      : 'https://player.vimeo.com/video/1097862914'
                  }
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className='VideoIframe'
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  title="Igualadina de Depuració i Recuperació IDR"
                ></iframe>
            </div>

            </div>

          </div>

        </div>
      </section>

          {/* QUI SOM */}

        <section className="DivSectionWrap DivLeft Dark" id="main-about">
          <div className="DivSection Left animation-up" data-animate="slide-up">

            <div className="SideTxt">
              <p className='tagline'>{t('sections.about.tagline')}</p>
              <h3><span className="BrownGrad">{t('sections.about.title')}</span>
              </h3>              
              <p>
              {t('sections.about.text1')}
              </p>
              <p>
              {t('sections.about.text2')}
              </p>
              <div className="AppBtn Brown">
                <Link href={`/${props.locale}/empresa`}><button>{t('button.more')}<Arrow_Icon /></button></Link>
              </div>
            </div>

            {/* <div className="SideImg"></div>  */}

            <div className="SideImg">

              {isTablet || isWide ? <Image alt="dashboard" src='/img/img-quisom.jpg' width={800} height={800} />
              : (null )}

            </div>

          </div>
      </section>
      <section>
        <div className='Stripe Brown'></div>
      </section>

        {/* SOCIS  */}

        <section className="SectionWrap" id="main-socis">
        <div className="CenterSection">
          <div className="CenterContent">
            <div className="CenterHeading animation-up" data-animate="slide-up">
              <h3>{t('sections.partners.title')}</h3>
              <div className="center-subtitle">
                <p>
                {t('sections.partners.subtitle')}
                </p>
              </div>
              <div className="CenterWrap">
                <Image className="animation-up mt-5" data-animate="slide-up"  loading="eager" 
                  alt="IDR" src='/logos/aj-black.png' 
                  // sizes="(max-width: 480px) 200px, (max-width: 1024px) 300px, 400px"
                  width={250} height={50} />
                <p className='mt-3'>
                 {t('sections.partners.illustrious')}
                </p>
              </div>

            </div>

            <div className=" mt-7">
              <div className="ImgCarousel">
              <ImgCarousel set="socis" />
              </div>
            </div>

          </div>

        </div>
      </section>
      
        {/* RESIDUS */}

        <section className="DivSectionWrap DivLeft Dark" id="main-services">
          <div className="DivSection Left animation-up" data-animate="slide-up">

            <div className="SideTxt">
              <p className='tagline'>{t('sections.services.tagline')}</p>
              <h3><span className="GreenGrad">{t('sections.services.title')}</span>
              </h3>              
              <p>
              {t('sections.services.text1')}
              </p>
              <p>
              {t('sections.services.text2')}
              </p>
              <div className="AppBtn Green">
                <Link href={`/${props.locale}/serveis`}><button>{t('sections.services.button')}<Arrow_Icon /></button></Link>
              </div>
            </div>

            {/* <div className="SideImg"></div>  */}

            <div className="SideImg">

              {isTablet || isWide ? <Image alt="dashboard" src='/img/img-residus.jpg' width={800} height={800} />
              : (null )}

            </div>

          </div>
      </section>
      <section>
        <div className='Stripe Green'></div>
      </section>

        {/* MISSION */}

        <section className="SectionWrap" id="main-mission">
          <div className="CenterSection">
            <div>
              <div className="CenterHeading animation-up" data-animate="slide-up">
                <div>
                  <h3>{t('sections.mission.title')}</h3>
                  <p>
                  {t('sections.mission.subtitle')}
                  </p>
                </div>
              </div>
            </div>
      
            <div className="CardGroup three Mission">
            
              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardImg">
                <Image className="animation-up" data-animate="slide-up"  loading="eager" 
                alt="img" src='/img/mission-1.jpg' width={800} height={800}
                sizes="(max-width: 480px) 180px, (max-width: 1024px) 200px, 220px"                />           
               </div>
                <div className="CardTxt">
                  <h6>{t('sections.mission.cards.water.title')}</h6>
                  <p>
                  {t('sections.mission.cards.water.text')}
                  </p>
                </div>
              </div>      

              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardImg">
                <Image className="animation-up" data-animate="slide-up"  loading="eager" 
                alt="img" src='/img/mission-2.jpg' width={800} height={800}
                sizes="(max-width: 480px) 180px, (max-width: 1024px) 200px, 220px"
                 />           
                </div>
                <div className="CardTxt">
                  <h6>{t('sections.mission.cards.sustainability.title')}</h6>
                  <p>
                  {t('sections.mission.cards.sustainability.text')}
                  </p>
                </div>
              </div>       

              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardImg">
                <Image className="animation-up" data-animate="slide-up"  loading="eager" 
                alt="img" src='/img/mission-3.jpg' width={800} height={800}
                sizes="(max-width: 480px) 180px, (max-width: 1024px) 200px, 220px"
                 />           
                </div>
                <div className="CardTxt">
                  <h6>{t('sections.mission.cards.circular.title')}</h6>
                  <p>
                  {t('sections.mission.cards.circular.text')}
                  </p>
                </div>
              </div>              
      
            </div>

          </div>
        </section>

      {/* INNOVATION */}

        <section className="DivSectionWrap DivLeft Dark" id="main-innovation">
          <div className="DivSection Left animation-up" data-animate="slide-up">

            <div className="SideTxt">
              <p className='tagline'>{t('sections.innovation.tagline')}</p>
              <h3><span className="BlueGrad">{t('sections.innovation.title')}</span>
              </h3>              
              <p>
              {t('sections.innovation.text')}
              </p>
              <div className="AppBtn Blue">
                <Link href={`/${props.locale}/innovacio`}><button>{t('sections.innovation.button')}<Arrow_Icon /></button></Link>
              </div>
            </div>

            {/* <div className="SideImg"></div>  */}

            <div className="SideImg">

              {isTablet || isWide ? <Image alt="dashboard" src='/img/img-lab.jpg' width={800} height={800} />
              : (null )}

            </div>

          </div>
      </section>
      <section>
        <div className='Stripe Blue'></div>
      </section>

      {/* POSTS */}

      <section className="NewsSectionWrap">
          <div className="NewsSection">
            <div className="NewsContent">
              <div className='NewsTitle'>
                <h3>{t('sections.posts.title')}</h3>
              </div>
              <RecentPosts allPosts={allPosts} locale={props.locale}/>
              </div>
          </div>
        </section>

      <Footer locale={props.locale} />

    </main>
  );
}

export const getStaticPaths = async () => {
  const locales = ['ca', 'es', 'en'];
  return {
    paths: locales.map(locale => ({ params: { locale } })),
    fallback: false,
  };
};



export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locale = typeof params?.locale === 'string' ? params.locale : 'ca';
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const posts = getAllPosts(Config.post_fields, locale);
  return {
    props: {
      messages,
      allPosts: posts,
      initialPosts: posts.slice(0, BlogArchiveConfig.blog_pagination_size),
      categoryCollection: getCategoryCollection(['slug', 'tags'], locale || 'ca'),
      locale,
    },
  };
};
