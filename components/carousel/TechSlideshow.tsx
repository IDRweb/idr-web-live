import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ImgCarousel from "../carousel/ImgCarousel";

const Flickity = require('react-flickity-component');
const flickityOptions = {
    initialIndex: 0,
    wrapAround: true,
    prevNextButtons: true,
    autoPlay: 0
}

const TechSlideshow: React.FC = () => {
    const t = useTranslations('plant.techSlideshow');

    return (
        <>

        <section className="BlogSectionWrap">
          <div className="BlogSection">
           <div className="animation-up" data-animate="slide-up">
             <div>
                <Flickity
                    className={'blog-carousel'}
                    elementType={'div'}
                    options={flickityOptions}
                    disableImagesLoaded={false}
                    reloadOnUpdate
                    static
                  >

                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                      <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-01.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>
                      <div className="SideTxt">
                        <p>{t('slides.analysis.tagline')}</p>
                        <h4>{t('slides.analysis.title')}</h4>
                          <p>
                          {t('slides.analysis.text1')}
                          </p>
                          <p>
                          {t('slides.analysis.text2')}
                          </p>
                          <p>
                          {t('slides.analysis.text3')}
                          </p>
                      </div>
                    </div>
                  </div>
                 
                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                    <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-02.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>
                      <div className="SideTxt">
                        <p>{t('slides.pretreatment.tagline')}</p>
                        <h4>{t('slides.pretreatment.title')}</h4>
                          <p>
                          {t('slides.pretreatment.text1')}
                          </p>
                          <p>
                          {t('slides.pretreatment.text2')}
                          </p>
                          <p>
                          {t('slides.pretreatment.text3')}
                          </p>
                      </div>
                    </div>
                  </div>

                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                    <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-03.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>
                      <div className="SideTxt">
                        <p>{t('slides.chemical.tagline')}</p>
                        <h4>{t('slides.chemical.title')}</h4>
                          <p>
                          {t('slides.chemical.text1')}
                          </p>
                          <p>
                          {t('slides.chemical.text2')}
                          </p>
                      </div>
                    </div>
                  </div>

                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                     <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-04.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>
                      <div className="SideTxt">
                        <p>{t('slides.biological1.tagline')}</p>
                        <h4>{t('slides.biological1.title')}</h4>
                          <p>
                          {t('slides.biological1.text1')}
                          </p>
                          <p>
                          {t('slides.biological1.text2')}
                          </p>
                      </div>
                    </div>
                  </div>

                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                      <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-05.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>

                      <div className="SideTxt">
                        <p>{t('slides.biological2.tagline')}</p>
                        <h4>{t('slides.biological2.title')}</h4>
                          <p>
                          {t('slides.biological2.text1')}
                          </p>
                          <p>
                          {t('slides.biological2.text2')}
                          </p>
                      </div>
                    </div>
                  </div>

                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                      <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-06.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>
                      <div className="SideTxt">
                        <p>{t('slides.biological3.tagline')}</p>
                        <h4>{t('slides.biological3.title')}</h4>
                          <p>
                          {t('slides.biological3.text1')}
                          </p>
                          <p>
                          {t('slides.biological3.text2')}
                          </p>
                          <p>
                          {t('slides.biological3.text3')}
                          </p>
                      </div>
                    </div>
                  </div>

                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                      <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-07.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>
                      <div className="SideTxt">
                        <p>{t('slides.tertiary.tagline')}</p>
                        <h4>{t('slides.tertiary.title')}</h4>
                          <p>
                          {t('slides.tertiary.text1')}
                          </p>
                      </div>
                    </div>
                  </div>

                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                      <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-08.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>
                      <div className="SideTxt">
                        <p>{t('slides.sludge1.tagline')}</p>
                        <h4>{t('slides.sludge1.title')}</h4>
                          <p>
                          {t('slides.sludge1.text1')}
                          </p>
                          <p>
                          {t('slides.sludge1.text2')}
                          </p>
                          <p>
                          {t('slides.sludge1.text3')}
                          </p>
                      </div>
                    </div>
                  </div>

                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                      <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-09.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>
                      <div className="SideTxt">
                        <p>{t('slides.sludge2.tagline')}</p>
                        <h4>{t('slides.sludge2.title')}</h4>
                          <p>
                          {t('slides.sludge2.text1')}
                          </p>
                          <p>
                          {t('slides.sludge2.text2')}
                          </p>
                          <p>
                          {t('slides.sludge2.text3')}
                          </p>
                      </div>
                    </div>
                  </div>

                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                      <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-10.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>
                      <div className="SideTxt">
                        <p>{t('slides.quality.tagline')}</p>
                        <h4>{t('slides.quality.title')}</h4>
                          <p>
                          {t('slides.quality.text1')}
                          </p>
                          <p>
                          {t('slides.quality.text2')}
                          </p>
                          <p>
                          {t('slides.quality.text3')}
                          </p>
                      </div>
                    </div>
                  </div>

                


                </Flickity>
              </div>
            </div>
          </div>
        </section>


        </>
    );
};


export default TechSlideshow;