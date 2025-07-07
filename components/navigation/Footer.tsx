import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type FooterProps = { locale: string };
const Footer = ({ locale }: FooterProps) => {
  // Simulate asPath as '' for static export (language selector will just go to home of each locale)
  const asPath = '';
  const locales = ['ca', 'es', 'en'];
  const t = useTranslations('navigation');
  const tf = useTranslations('footer');

  // Helper to swap the locale in the current path
  function getLocalePath(targetLocale: string) {
    // For static export, just go to the home of the selected locale
    return `/${targetLocale}`;
  }

  const currentLocale = locale;

  return (
    <>
      <div className="Footer">
        <div className="FooterContent">

          <div className="FooterNavWrap">
            
            <div className='LogoWrap'>
              <div className="FooterSection Logo">
                <div className="">
                  <div className="">
                    <div className="footer-logo">
                       <Link href="/" target="_blank" rel="noopener noreferrer">
                         <Image alt="IDR" src='/logos/logo.png' width={200} height={200} />
                       </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

            <div className='ContentWrap'>
              <div className="FooterSection Nav">
                <div className="">
                  <h6>{tf('sitemap')}</h6>
                  <ul>
                    <li>
                      <Link href={`/${currentLocale}/plant`} className="">{t('plant')}</Link>
                    </li>
                    <li>
                      <Link href={`/${currentLocale}/innovation`} className="">{t('innovation')}</Link>
                    </li>
                    <li>
                      <Link href={`/${currentLocale}/sustainability`} className="">{t('sustainability')}</Link>
                    </li>
                    <li>
                      <Link href={`/${currentLocale}/services`} className="">{t('services')}</Link>
                    </li>
                    <li>
                      <Link href={`/${currentLocale}/about`} className="">{t('about')}</Link>
                    </li>
                    <li>
                      <Link href={`/${currentLocale}/privacy`}>{tf('privacy')}</Link>
                    </li>
                    <li>
                      <Link href="https://clients.idr.cat/" target="_blank" rel="noopener noreferrer">{t('clientArea')}</Link>
                    </li>

                  </ul>
                </div>
              </div>

              <div className="FooterSection Info">
                <div className='FooterColumnWrap'>
                  <div className="FooterColumn">
                    <h6>{tf('address')}</h6>
                    <ul>
                      <li>
                        <p>{tf('addressStreet')}</p>
                        <p>{tf('addressCity')}</p>
                        <p>{tf('addressCountry')}</p>
                      </li>
                    </ul>
                  </div>

                  <div className="FooterColumn">
                    <h6>{tf('contact')}</h6>
                    <ul>
                      <li>
                        <p>{tf('contactOffice')}: +34 93 806 85 95</p>
                        <p>{tf('contactPlant')}: +34 93 803 03 30</p>
                        <p>Email: info@idr.cat</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="PartnerLogos">
                      <div className="Socis">
                        <a href="https://leatherbarcelona.com/" target="_blank" rel="noopener noreferrer">
                         <Image src="/logos/cluster.png" height="300" width="300" alt="Logo" loading='eager'/>
                        </a>
                      </div>
                      <div className="Socis">
                        <a href="https://www.tradebe.com/environmental-services/" target="_blank" rel="noopener noreferrer">
                         <Image src="/logos/tradebe.png" height="300" width="300" alt="Logo" loading='eager'/>
                        </a>
                      </div>
                      <Image src="/logos/gremi.png" height="300" width="300" alt="Logo" loading='eager'/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="FooterInfoWrap">

            <div className="Legal">
              <div><p>{tf('copyright')}</p></div>
              <div className="LanguageSelector">
                {locales.map((lng) => (
                  <Link
                    key={lng}
                    href={getLocalePath(lng)}
                    className={currentLocale === lng ? 'active' : ''}
                  >
                    {lng.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          
          </div>

            {/*              
              <div className="PoweredBy">
                  <div className="PoweredByInner">
                    <span>Website by</span>
                    <a target="_blank" href="">
                    </a>
                    <Link href="www.akashalabs.com">&nbsp;Akasha Labs</Link>
                  </div>
                </div> */}
        
        </div>
      </div>
    </>
  );
};


export { Footer };