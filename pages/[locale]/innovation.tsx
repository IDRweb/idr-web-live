import React from 'react';
import useMediaQuery from "../../hooks/useMediaQuery";
import Image from "next/image";
import Link from 'next/link';
import MainHeader from "../../components/navigation/Header";
import {Footer} from '../../components/navigation/Footer';
import AnimationTrigger from '../../components/AnimationTrigger';
import Arrow_Icon from '../../components/SVG/Arrow_Icon';
import { Meta } from '../../components/head/Meta';

import RecentPosts from '../../components/blog/RecentPosts';
import { GetStaticPaths, GetStaticProps } from 'next';
import { BlogArchiveConfig, Config } from '../../utils/Config';
import { getAllPosts, getCategoryCollection, PostItems } from '../../utils/Content';
import BlogArchive from '../../components/blog/BlogArchive';
import { useTranslations } from 'next-intl';

type IIndexProps = {
  initialPosts: PostItems[];
  allPosts: PostItems[];
  messages: any;
  locale: string;
};

export default function Innovation(props: IIndexProps) {
  const { allPosts, initialPosts, messages, locale } = props;
  const t = useTranslations('innovation');

  return (
    <main className='Main'>
      <AnimationTrigger />
      <div>
        <MainHeader useWhite={false} locale={locale}
          meta={<Meta 
          title={messages.meta.innovation.title}
          metaTitle={messages.meta.innovation.metaTitle}
          metaImg="https://idr.com/thumb/thumb.png"
          description={messages.meta.innovation.metaDescription} />} 
          />
      </div>

      <div className="HeroSectionWrap Dark" id="innovation-hero">
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

      <section className="SectionWrap" id="innovation-main">

        {/* RIGHT */}

        <div className="SideSection MiddleSpace">
          <div className="SideContent Right animation-up" data-animate="slide-up">
          
            <div className="SideImg">
              <div className='ImgWrap'>
                <Image className="radius-4 nimation-up" data-animate="slide-up"  
                loading="eager" 
                alt="IDR" src='/img/img-catedra.jpg' 
                sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                width={1200} height={400} />
              </div>
            </div>
            
            <div className="SideTxt">
              <p className='tagline'>{t('sections.projects.tagline')}</p>
              <h3>{t('sections.projects.title')}</h3>
              <p className='highlight'>
              {t('sections.projects.highlight')}
              </p>
              <p>
              {t('sections.projects.text')}
              </p>
            </div>
          </div>

        </div>

        {/* LEFT */}

        <div className="SideSection">
          <div className="SideContent Left animation-up" data-animate="slide-up">
            <div className="SideTxt">
              <p className='tagline'>{t('sections.innovation.tagline')}</p>
              <h3>{t('sections.innovation.title')}</h3>
              <p className='highlight'>
                {t('sections.innovation.highlight')}
              </p>
              <p>
              {t('sections.innovation.text1')}
              </p>
              <p>
              {t('sections.innovation.text2')}
              </p>

          </div>

            <div className="SideImg">
              <div className='ImgWrap'>
                <Image className="radius-4 nimation-up" data-animate="slide-up"  
                // loading="eager" 
                alt="IDR" src='/img/img-barometre.jpg' 
                sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                width={1200} height={400} />
              </div>
            </div>
          </div>
        </div>

        {/* NUMBERS */}

        <div className="CenterSection">
          <div className="CardGroup three Numbers">

            <div className="CardWrap animation-up" data-animate="slide-up">
              <div className="CardNumber">
                <h1 className='MainGrad'>{t('numbers.projects.amount')}</h1>
              </div>
                <div className='CardLineWrap'>
                  <div className="CardLine"></div>
                </div>
              <div>
                <h6 className='CardConcept blue-text'>{t('numbers.projects.label')}</h6>
              </div>
            </div>

            <div className="CardWrap animation-up" data-animate="slide-up">
              <div className="CardNumber">
                <h1 className='MainGrad'>{t('numbers.collaborators.amount')}</h1>
              </div>
                <div className='CardLineWrap'>
                  <div className="CardLine"></div>
                </div>
              <div>
                <h6 className='CardConcept blue-text'>{t('numbers.collaborators.label')}</h6>
              </div>
            </div>

            <div className="CardWrap animation-up" data-animate="slide-up">
              <div className="CardNumber">
                <h1 className='MainGrad'>{t('numbers.researchers.amount')}</h1>
              </div>
                <div className='CardLineWrap'>
                  <div className="CardLine"></div>
                </div>
              <div>
                <h6 className='CardConcept blue-text'>{t('numbers.researchers.label')}</h6>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="SectionWrap Dark" id="innovation-quote">
        <div className="CenterSection">
            <div className="QuoteContent">
              <h4>
              {t('sections.quote.text')}
              </h4>
            </div>
        </div>
      </section>
      
      <section className="SectionWrap" id="testbed">

        {/* RIGHT */}

        <div className="SideSection">
          <div className="SideContent Right animation-up" data-animate="slide-up">
          
            <div className="SideImg">
              <div className='ImgWrap'>
                <Image className="radius-4 nimation-up" data-animate="slide-up"  
                // loading="eager" 
                alt="IDR" src='/img/img-testbed.jpg' 
                sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                width={1200} height={400} />
              </div>
            </div>
            
            <div className="SideTxt">
              <p className='tagline'>{t('sections.testbed.tagline')}</p>
              <h3>{t('sections.testbed.title')}</h3>
              <p className='highlight'>
                 {t('sections.testbed.highlight')}
              </p>
              <p>
              {t('sections.testbed.text')}
              </p>
              <div className="AppBtn">
              <Link href="/post/testbed"><button>{t('button.more')}<Arrow_Icon /></button></Link>
              </div>
            </div>
          </div>
        </div>

      </section>

      <div className='GradStripe'></div>

      {/* PROJECTES */}
      
      <section className="SectionWrap" id="main-mission">
        <div className="CenterSection animation-up" data-animate="slide-up">
          <div>
            <div>
              <div>
                <h2>{t('sections.featured.title')}</h2>
              </div>
            </div>
          </div>

          <BlogArchive allPosts={allPosts} initialPosts={[]} locale={locale}/>

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
  const posts = getAllPosts(Config.post_fields, locale);
  return {
    props: {
      messages,
      locale,
      allPosts: posts,
      initialPosts: posts.slice(0, BlogArchiveConfig.blog_pagination_size),
      categoryCollection: getCategoryCollection(['slug', 'tags'], locale || 'ca'),
    },
  };
}; 