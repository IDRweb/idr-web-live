import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import MainHeader from "../../components/navigation/Header";
import {Footer} from '../../components/navigation/Footer';
import AnimationTrigger from '../../components/AnimationTrigger';
import Arrow_Icon from '../../components/SVG/Arrow_Icon';
import { Meta } from '../../components/head/Meta';
import { useTranslations } from 'next-intl';
import { GetStaticPaths, GetStaticProps } from 'next';

type SustainabilityProps = { messages: any; locale: string };

export default function Sustainability(props: SustainabilityProps) {
  const { locale } = props;
  const t = useTranslations('sustainability');

  return (
    <main className='Main'>
     <AnimationTrigger />
      <div>
        <MainHeader useWhite={false} locale={locale}
          meta={<Meta 
          title={props.messages.meta.sustainability.title}
          metaTitle={props.messages.meta.sustainability.metaTitle}
          metaImg="https://idr.com/thumb/thumb.png"
          description={props.messages.meta.sustainability.metaDescription} />} 
          />
      </div>

      <div className="HeroSectionWrap Dark" id="eco-hero">
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

      <section className="SectionWrap" id="eco-main">

        {/* RIGHT */}

        <div className="SideSection MiddleSpace">
          <div className="SideContent Right">
          
            <div className="SideImg animation-up" data-animate="slide-up">
              <div className='ImgWrap'>
                <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                alt="IDR" src='/img/img-drop.jpg' 
                sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                width={1200} height={400} />
              </div>
            </div>
            
            <div className="SideTxt animation-up" data-animate="slide-up">
              <p className='tagline'>{t('sections.mission.tagline')}</p>
              <h3>{t('sections.mission.title')}</h3>
              <p className='highlight'>
              {t('sections.mission.highlight')}
              </p>
              <p>
              {t('sections.mission.text')}
              </p>
            </div>
          </div>

        </div>

        {/* LEFT */}

        <div className="SideSection">
          <div className="SideContent Left">
            <div className="SideTxt animation-up" data-animate="slide-up">
              <p className='tagline'>{t('sections.impact.tagline')}</p>
              <h3>{t('sections.impact.title')}</h3>
              <p className='highlight'>
              {t('sections.impact.highlight')}
              </p>
              <p>
              {t('sections.impact.text1')}
              </p>
              <p>
              {t('sections.impact.text2')}
              </p>

            {/* <div className="AppBtn">
              <Link href="/empresa"><button>Saber més<Arrow_Icon /></button></Link>
            </div> */}

          </div>

            <div className="SideImg animation-up" data-animate="slide-up">
              <div className='ImgWrap'>
                <Image className="radius-4 nimation-up" data-animate="slide-up"  
                // loading="eager" 
                alt="IDR" src='/img/img-riu.jpg' 
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
                  <h1 className='MainGrad'>{t('numbers.water.amount')}</h1>
                </div>
                <div className='CardLineWrap'>
                    <div className="CardLine"></div>
                  </div>
                <div>
                  <h6 className='CardConcept blue-text'>{t('numbers.water.label')}</h6>
                </div>
              </div>    

              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardNumber">
                  <h1 className='MainGrad'>{t('numbers.pollution.amount')}</h1>
                </div>
                <div className='CardLineWrap'>
                    <div className="CardLine"></div>
                  </div>
                <div className='CardConcept'>
                  <h6 className='blue-text'>
                  {t('numbers.pollution.label')}
                  </h6>
                </div>
              </div>   

              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardNumber">
                  <h1 className='MainGrad'>{t('numbers.companies.amount')}</h1>
                </div>
                  <div className='CardLineWrap'>
                    <div className="CardLine"></div>
                  </div>
                <div>
                  <h6 className='CardConcept blue-text'>{t('numbers.companies.label')}</h6>
                </div>
              </div>     
             
            </div>

          </div>

      </section>


    {/* QUOTE */}

      <section className="SectionWrap Dark" id="eco-quote">
        <div className="CenterSection">
            <div className="QuoteContent">
              <h4>
              {t('sections.quote.text')}
              </h4>
            </div>

        </div>
      </section>


   {/* CICLE VIDA */}

    <section className="SectionWrap" id="eco-cicle">
        <div className="CenterSection">
          <div className="CenterContent">
            <div className="CenterHeading animation-up" data-animate="slide-up">
            <p className='tagline'>{t('sections.lifecycle.tagline')}</p>
              <h3>{t('sections.lifecycle.title')}</h3>
            </div>

            <div className="Content animation-up" data-animate="slide-up">
              <div className="SideImg">
                <div className='SquareImgWrap'>
                  <Image className="radius-3"  
                  // loading="eager" 
                  alt="IDR" src='/img/cicle-1.jpg' 
                  sizes="(max-width: 480px) 400px, (max-width: 1024px) 400px, 400px"
                  width={900} height={600} />
                </div>
              </div>
              
              <div className="SideTxt">
                <h5>{t('sections.lifecycle.circular.title')}</h5>
                <p>
                {t('sections.lifecycle.circular.text')}
                </p>
              </div>
            </div>

            <div className="Content animation-up" data-animate="slide-up">
              <div className="SideImg">
               <div className='SquareImgWrap'>
                  <Image className="radius-3"  
                  // loading="eager" 
                  alt="IDR" src='/img/cicle-2.jpg' 
                  sizes="(max-width: 480px) 400px, (max-width: 1024px) 400px, 400px"
                  width={900} height={600} />
                </div>
              </div>
              
              <div className="SideTxt">
                <h5>{t('sections.lifecycle.byproducts.title')}</h5>
                <p>
                {t('sections.lifecycle.byproducts.text')}
                </p>
              </div>
            </div>

            <div className="Content animation-up" data-animate="slide-up">
              <div className="SideImg">
                <div className='SquareImgWrap'>
                  <Image className="radius-3"  
                  // loading="eager" 
                  alt="IDR" src='/img/cicle-3.jpg' 
                  sizes="(max-width: 480px) 400px, (max-width: 1024px) 400px, 400px"
                  width={900} height={600} />
                </div>
              </div>
              
              <div className="SideTxt">
                <h5>{t('sections.lifecycle.zero.title')}</h5>
                <p>
                {t('sections.lifecycle.zero.text')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className='Stripe Green'></div>
      </section>

    {/* COMPROMIS SOSTENIBLE */}

    <section className="ZeroSectionWrap" id="eco-compromis">
          <div className="ZeroSection">
            <div>
              <div className="CenterHeading animation-up" data-animate="slide-up">
                <div>
                <p className='tagline'>{t('sections.commitment.tagline')}</p>
                  <h2>{t('sections.commitment.title')}</h2>
                  <p>
                  {t('sections.commitment.text')}
                  </p>
                </div>
              </div>
            </div>
      
            <div className="CardGroup four Squares">
            
              <div className="CardWrap Card1 animation-up" data-animate="slide-up">
                <div className="CardImg">
                  <Image 
                  // loading="eager" 
                  alt="img" src='/icons/check-circle.png' width={100} height={100} />           
                </div>
                <div className="CardTxt">
                  <h6>{t('sections.commitment.cards.renewable.title')}</h6>
                  <p>
                  {t('sections.commitment.cards.renewable.text')}
                  </p>
                </div> 
              </div>   

              <div className="CardWrap Card2 animation-up" data-animate="slide-up">
                <div className="CardImg">
                <Image 
                // loading="eager" 
                alt="img" src='/icons/check-circle.png' width={100} height={100} />           
               </div>
                <div className="CardTxt">
                  <h6>{t('sections.commitment.cards.chemicals.title')}</h6>
                  <p>
                  {t('sections.commitment.cards.chemicals.text')}
                  </p>
                </div>
              </div>  

              <div className="CardWrap Card3 animation-up" data-animate="slide-up">
                <div className="CardImg">
                <Image 
                // loading="eager" 
                alt="img" src='/icons/check-circle.png' width={100} height={100} />           
               </div>
                <div className="CardTxt">
                  <h6>{t('sections.commitment.cards.audits.title')}</h6>
                  <p>
                  {t('sections.commitment.cards.audits.text')}
                  </p>
                </div>
              </div>  

             <div className="CardWrap Card4 animation-up" data-animate="slide-up">
                <div className="CardImg">
                <Image 
                // loading="eager" 
                alt="img" src='/icons/check-circle.png' width={100} height={100} />           
               </div>
                <div className="CardTxt">
                  <h6>{t('sections.commitment.cards.safety.title')}</h6>
                  <p>
                  {t('sections.commitment.cards.safety.text')}
                  </p>
                </div>
              </div>        
            </div>

          </div>
        </section>

    {/* CERTIFICATS*/}

    <section className="SectionWrap" id="eco-cert">
        <div className="CenterSection">
          <div className="CenterContent">
            <div className="CenterTxt animation-up" data-animate="slide-up">
              <h3>{t('sections.certifications.title')}</h3>
                <div className=''>
                 <div className="">
                    <p className='highlight'>
                    {t('sections.certifications.highlight')}
                    </p>
                  </div>
                  <div className="">
                  <p>
                    {t('sections.certifications.text')}
                    </p>
                </div>
                </div>
            </div>

            {/* cards */}
            
            <div className="CardGroup Cert">
            
            <div>
              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardTopCert">
                  <div className="CardImg">
                    <Image loading="eager" 
                    alt="img" src='/logos/enac-01.png' width={250} height={200} />           
                  </div>
                </div>
                <div className="CardBottomCert">
                  <div className="CardTxt">
                    <h6>{t('sections.certifications.iso9001.title')}</h6>
                    <ul>
                      <li>
                      {t('sections.certifications.iso9001.items.item1')}
                      </li>
                      <li>
                      {t('sections.certifications.iso9001.items.item2')}
                      </li>
                      <li>
                      {t('sections.certifications.iso9001.items.item3')}
                      </li>
                      <li>
                      {t('sections.certifications.iso9001.items.item4')}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardTopCert">
                <div className="CardImg">
                  <Image loading="eager" 
                  alt="img" src='/logos/enac-02.png' width={250} height={200} />           
                </div>
                </div>
                <div className="CardBottomCert">
                  <div className="CardTxt">
                    <h6>
                    {t('sections.certifications.iso14001.title')}
                    </h6>
                    <ul>
                      <li>
                      {t('sections.certifications.iso14001.items.item1')}
                      </li>
                      <li>
                      {t('sections.certifications.iso14001.items.item2')}
                      </li>
                      <li>
                      {t('sections.certifications.iso14001.items.item3')}
                      </li>
                      <li>
                      {t('sections.certifications.iso14001.items.item4')}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardTopCert">
                <div className="CardImg">
                  <Image loading="eager" 
                  alt="img" src='/logos/enac-03.png' width={250} height={200} />           
                </div>
                </div>
                <div className="CardBottomCert">
                  <div className="CardTxt">
                    <h6>
                    {t('sections.certifications.iso45001.title')}
                    </h6>
                    <ul>
                      <li>
                      {t('sections.certifications.iso45001.items.item1')}
                      </li>
                      <li>
                      {t('sections.certifications.iso45001.items.item2')}
                      </li>
                      <li>
                      {t('sections.certifications.iso45001.items.item3')}
                      </li>
                      <li>
                      {t('sections.certifications.iso45001.items.item4')}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardTopCert">
                <div className="CardImg">
                  <Image loading="eager" 
                  alt="img" src='/logos/endesa.png' width={250} height={200} />           
                </div>
                </div>
                <div className="CardBottomCert">
                  <div className="CardTxt">
                    <h6>{t('sections.certifications.energy.title')}</h6>
                    <p>
                    {t('sections.certifications.energy.text')}
                    </p>

                  </div>
                </div>
              </div>
            </div>
          
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