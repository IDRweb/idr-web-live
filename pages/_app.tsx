import "../styles/fonts.css";
import "../styles/core.css";
import "../styles/global.css";
import "../styles/elements.css";
import "../styles/slideshow.css";
import "../styles/main.css";
import "../styles/blog.css";
import "../styles/extra.css";

import "../node_modules/flickity/css/flickity.css";

import React, { useEffect, useState } from 'react';
import type { AppProps } from "next/app";
import TagManager from 'react-gtm-module';
import { IntlProvider } from 'next-intl';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const { locale } = useRouter();

  return (
    <IntlProvider messages={pageProps.messages} locale={locale || 'ca'}>
      <div className="root">
        <Component {...pageProps} />
      </div>
    </IntlProvider>
  );
}
