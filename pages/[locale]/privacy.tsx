import MainHeader from "../../components/navigation/Header";
import { Footer } from '../../components/navigation/Footer';
import { Meta } from '../../components/head/Meta';
import { useTranslations } from 'next-intl';

export default function Privacy({ locale, messages }: { locale: string, messages: any }) {
  const t = useTranslations('privacy');
  return (
    <main className="Privacy">
      <div>
        <MainHeader
          useWhite={true}
          locale={locale}
          meta={
            <Meta
              title={messages.meta.privacy.title}
              metaTitle={messages.meta.privacy.metaTitle}
              metaImg="https://idr.cat/thumb/thumb.png"
              description={messages.meta.privacy.metaDescription}
            />
          }
        />
      </div>

      <section className="SectionWrap" id="privacy">
        <div className="LegalHero">
          <h2><span className="">{t('title')}</span></h2>
          <p>{t('effectiveDate')}</p>
          <p>{t('intro')}</p>
        </div>
      </section>

      <section className="SectionWrap">
        <div className="LegalSection">
          <h6>{t('section1.title')}</h6>
          <h4>{t('section1.subtitle')}</h4>
          <div className="">
            <p>{t('section1.text')}</p>
          </div>
        </div>

        <div className="LegalSection">
          <h6>{t('section2.title')}</h6>
          <h4>{t('section2.subtitle')}</h4>
          <div className="">
            <p>{t('section2.text')}</p>
          </div>
        </div>

        <div className="LegalSection">
          <h6>{t('section3.title')}</h6>
          <h4>{t('section3.subtitle')}</h4>
          <div className="">
            <p>{t('section3.text')}</p>
          </div>
        </div>

        <div className="LegalSection">
          <h6>{t('section4.title')}</h6>
          <h4>{t('section4.subtitle')}</h4>
          <div className="">
            <p>{t('section4.text')}</p>
          </div>
        </div>

        <div className="LegalSection">
          <h6>{t('section5.title')}</h6>
          <h4>{t('section5.subtitle')}</h4>
          <div className="">
            <p>{t('section5.text')}</p>
          </div>
        </div>

        <div className="LegalSection">
          <h6>{t('section6.title')}</h6>
          <h4>{t('section6.subtitle')}</h4>
          <div className="">
            <p>{t('section6.text')}</p>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}

export async function getStaticPaths() {
  const locales = ['ca', 'es', 'en'];
  return {
    paths: locales.map(locale => ({ params: { locale } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { locale: string } }) {
  const locale = typeof params?.locale === 'string' ? params.locale : 'ca';
  const messages = (await import(`../../messages/${locale}.json`)).default;
  return {
    props: {
      messages,
      locale,
    },
  };
} 