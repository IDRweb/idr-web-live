import React, { useEffect, useState } from "react";
import { Toolbar } from "./Toolbar";
import { useElementOnScreen } from "../../hooks/useElementOnScreen"
import useMediaQuery from "../../hooks/useMediaQuery";
import Head from 'next/head';
import Link from "next/link";
import { useTranslations } from 'next-intl';

type MainHeaderProps = { locale: string } & any;
export default function MainHeader(props: MainHeaderProps) {
  const locale = props.locale;
  const t = useTranslations('navigation');
  const [containerRef, isVisible ] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });

  const isMobile = useMediaQuery('(max-width: 480px)');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const persistedScrollState = localStorage.getItem("toolbarScrolled");
      setIsScrolled(persistedScrollState === "true");
      setIsScrolled(!isVisible);
      localStorage.setItem("toolbarScrolled", (!isVisible).toString());
    }
  }, [isVisible]);

  // const headerClass = isMobile ? "header-top-w" : (props.useWhite ? "header-top-w" : "header-top");
  // const headerScrolledClass = isMobile ? "header-scrolled-w" : (props.useWhite ? "header-scrolled-w" : "header-scrolled");
  const headerClass = props.useWhite ? "header-top-w" : "header-top";
  const headerScrolledClass = "header-scrolled";

  return (
    <>
    {props.meta}
    <div ref={containerRef}></div>
        <div className={isVisible ? headerClass : headerScrolledClass}>
          
        <Toolbar useWhite={props.useWhite} {...props}>
          <div className="MenuLinks">
            <Link href={`/${locale}`}>{t('home')}</Link>
            <Link href={`/${locale}/plant`}>{t('plant')}</Link>
            <Link href={`/${locale}/innovation`}>{t('innovation')}</Link>
            <Link href={`/${locale}/sustainability`}>{t('sustainability')}</Link>
            <Link href={`/${locale}/services`}>{t('services')}</Link>
            <Link href={`/${locale}/about`}>{t('about')}</Link>
          </div>
        </Toolbar>

        </div>
        
    </>
  );
}
