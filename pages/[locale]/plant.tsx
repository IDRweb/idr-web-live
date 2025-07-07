import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import MainHeader from "../../components/navigation/Header";
import {Footer} from '../../components/navigation/Footer';
import AnimationTrigger from '../../components/AnimationTrigger';
import Arrow_Icon from '../../components/SVG/Arrow_Icon';
import { Meta } from '../../components/head/Meta';
import TechSlideshow from '../../components/carousel/TechSlideshow';
import RecentPosts from '../../components/blog/RecentPosts';
import { GetStaticProps } from 'next';
import { BlogArchiveConfig, Config } from '../../utils/Config';
import { getAllPosts, getCategoryCollection, PostItems } from '../../utils/Content';
import VideoTecnic from '../../components/descarte/VideoTecnic';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

type IIndexProps = {
  initialPosts: PostItems[];
  allPosts: PostItems[];
  messages: any;
  locale: string;
};

export default function Tech(props: IIndexProps) {
  const { allPosts, initialPosts, messages, locale } = props;
  const t = useTranslations('plant');
  const router = useRouter();

  return (
    <main className='Main'>
     <AnimationTrigger />
      <div>
        <MainHeader 
          useWhite={false}
          locale={locale}
          meta={<Meta 
            title={messages.meta.plant.title}
            metaTitle={messages.meta.plant.metaTitle}
            metaImg="https://idr.com/thumb/thumb.png"
            description={messages.meta.plant.metaDescription}
          />} 
        />
      </div>

      <div className="HeroSectionWrap Dark" id="tech-hero">
          <div className="Overlay"></div>
        <div className="HeroSection">
          <div className="HeroContent Wide animation-right" data-animate="slide-right">
            <div className='HeroTitle'>
              <h6>{t('hero.tagline')}</h6>
              <h2>{t('hero.title')}</h2>
            </div>
          </div>
        </div>

      </div>

      {/* MAIN SECTION */}

    <section className="SectionWrap" id="tech-main">

      {/* RIGHT */}

      <div className="SideSection MiddleSpace">
        <div className="SideContent Right animation-up" data-animate="slide-up">
        
          <div className="SideImg">
            <div className='ImgWrap'>
              <Image className="radius-4" loading="eager" 
              alt="IDR" src='/img/img-uf.jpg' 
              sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
              width={1200} height={400} />
            </div>
          </div>
          
          <div className="SideTxt">
            <p className='tagline'>{t('sections.plant.tagline')}</p>
            <h3>{t('sections.plant.title')}</h3>
            <p className='highlight'>
            {t('sections.plant.highlight')}
            </p>
            <p>
            {t('sections.plant.text1')}
            </p>
            <p>
            {t('sections.plant.text2')}
            </p>
          </div>
        </div>

      </div>

      {/* LEFT */}

      <div className="SideSection">
        <div className="SideContent Left animation-up" data-animate="slide-up">
          <div className="SideTxt">
            <p className='tagline'>{t('sections.process.tagline')}</p>
            <h3>{t('sections.process.title')}</h3>

            <p className='highlight'>
            {t('sections.process.highlight')}
            </p>
            <p>
            {t('sections.process.text1')}
            </p>
            <p>
            {t('sections.process.text2')}
            </p>

        </div>

          <div className="SideImg">
          <div className='ImgWrap'>
              <Image className="radius-4" 
              // loading="eager" 
              alt="IDR" src='/img/img-bio.jpg' 
              sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
              width={1200} height={400} />
            </div>
          </div>
        </div>
      </div>

      {/* NUMBERS */}

      <div className="CenterSection">
          <div className="CardGroup three Numbers Small">

          <div className="CardWrap animation-up" data-animate="slide-up">
            <div className="CardNumber">
              <h1 className='MainGrad'>{t('numbers.investment.amount')}</h1>
            </div>
              <div className='CardLineWrap'>
                <div className="CardLine"></div>
              </div>
            <div>
              <h6 className='CardConcept blue-text'>{t('numbers.investment.label')}</h6>
            </div>
          </div>   

          <div className="CardWrap animation-up" data-animate="slide-up">
            <div className="CardNumber">
              <h1 className='MainGrad'>{t('numbers.operation.amount')}</h1>
            </div>
              <div className='CardLineWrap'>
                <div className="CardLine"></div>
              </div>
            <div>
              <h6 className='CardConcept blue-text'>{t('numbers.operation.label')}</h6>
            </div>
          </div>   

          <div className="CardWrap animation-up" data-animate="slide-up">
            <div className="CardNumber">
              <h1 className='MainGrad'>{t('numbers.water.amount')}</h1>
            </div>
              <div className='CardLineWrap'>
                <div className="CardLine"></div>
              </div>
            <div>
              <h6 className='CardConcept blue-text'>{t('numbers.water.label')}</h6>
            </div>
          </div>   
          </div>

        </div>

      </section>

      <section>
        {/* <div className='GradStripe'></div> */}
        <div className='Stripe Blue'></div>
      </section>


    {/* INSTALACIONS */}

    <section className="SectionWrap" id="tech-planta">
        <div className="CenterSection">
          <div className="CenterContent">
            <div className="CenterTxt animation-up" data-animate="slide-up">
            <p className='tagline'>{t('sections.facilities.tagline')}</p>
              <h3>{t('sections.facilities.title')}</h3>
              <div className="TextGroup">
                <div className="HalfText">
                  <p>
                  {t('sections.facilities.text1')}
                  </p>
                </div>
                <div className="HalfText">
                  <p>
                  {t('sections.facilities.text2')}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="TechImg animation-up" data-animate="slide-up">
          <img
            alt="IDR"
            src={
              router.locale === 'es'
                ? '/svg/es-planta.svg'
                : router.locale === 'en'
                ? '/svg/en-planta.svg'
                : '/svg/cat-planta.svg'
            }
          />
        </div>

      </section>

      <TechSlideshow/>

      <section className="SectionWrap" id="tech-video">
        <div className="VideoWrap animation-up" data-animate="slide-up">
          <p className='tagline'>{t('sections.video.tagline')}</p>
          <h3>{t('sections.video.title')}</h3>
            {/* <video playsInline controls 
            src="video/cat-tecnic.mp4">
            </video> */}

            <div
                style={{
                  padding: '56.25% 0 0 0',
                  position: 'relative',
                }}
              >
                <iframe
                  src={
                    router.locale === 'es'
                      ? 'https://player.vimeo.com/video/1097863337'
                      : router.locale === 'en'
                      ? 'https://player.vimeo.com/video/1097863149'
                      : 'https://player.vimeo.com/video/1097863538'
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
          <div>

        </div>
      </section>

      {/* POSTS */}

        <section className="NewsSectionWrap">
          <div className="NewsSection">
            <div className="NewsContent animation-up" data-animate="slide-up">
              <div className='NewsTitle'>
                <h3>{t('sections.posts.title')}</h3>
              </div>
              <RecentPosts allPosts={allPosts} locale={locale}/>
              </div>
          </div>
        </section>

      <Footer locale={locale || 'ca'} />

    </main>
  );
}

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

export const getStaticPaths = async () => {
  const locales = ['ca', 'es', 'en'];
  return {
    paths: locales.map(locale => ({ params: { locale } })),
    fallback: false,
  };
}; 