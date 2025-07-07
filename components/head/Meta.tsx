import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Config } from '../../utils/Config';
import { addTrailingSlash } from '../../utils/Url';

type IMetaProps = {
  title?: string;
  metaTitle?: string;
  metaImg?: string;
  description: string;
  pauthor?: string;
  author_image?: string;
  canonical?: string;
  post?: {
    image?: string;
    date: string;
    modified_date: string;
    pauthor: string;
    author_image: string;
  };
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {props.canonical && <link rel="canonical" href={props.canonical} key="canonical" />}

        <link rel="apple-touch-icon" href={`${process.env.baseUrl}/apple-touch-icon.png`} key="apple" />
        <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.baseUrl}/favicon-32x32.png`} key="icon32" />
        <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.baseUrl}/favicon-16x16.png`} key="icon16" />
        <link rel="icon" href={`${process.env.baseUrl}/favicon.ico`} key="favicon" />

        <link rel="apple-touch-icon" sizes="180x180"  href="/favicon/apple-touch-icon.png" key="apple" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" key="icon32" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" key="icon16" />
        <link rel="icon" href="/favicon/favicon.ico" key="favicon"/>
        <link rel="manifest" href="/favicon/site.webmanifest" />

        {/* PAGE TITLE - using normal title attribute*/}
        {/* Is the home page */}
        {router.pathname === '/' ? (<title>{`${Config.site_name}.com`}</title>) : ('')}
        {/* Is a post page */}
        {router.pathname.indexOf("post") !== -1 ? (<title>{`${props.metaTitle} | ${Config.site_name}`}</title>) : ('')}
        {/* Is not a post or the home page */}
        {router.pathname.indexOf("post") == -1 && router.pathname !== '/' ? (<title>{`${props.title} | ${Config.site_name}`}</title>) : ('')}

        {/* OG TITLE - using meta title attribute*/}
        {/* Is the home page */}
        {router.pathname === '/' ? (<meta property="og:title" content={`${props.metaTitle}`} key="og:title" />) : ('')}
        {/* Is a post page */}
        {router.pathname.indexOf("post") !== -1 ? (<meta property="og:title" content={`${props.metaTitle} | ${Config.site_name}`} key="og:title" />) : ('')}
        {/* Is not a post or the home page */}
        {router.pathname.indexOf("post") == -1 && router.pathname !== '/' ? (<meta property="og:title" content={`${props.metaTitle}`} key="og:title" />) : ('')}

        {/* TWITTER TITLE - using meta title attribute*/}
        {/* Is the home page */}
        {router.pathname === '/' ? (<meta key="twitter:title" name="twitter:title" content={`${props.metaTitle}`} />) : ('')}
        {/* Is a post page */}
        {router.pathname.indexOf("post") !== -1 ? (<meta key="twitter:title" name="twitter:title" content={`${props.metaTitle} | ${Config.site_name}`} />) : ('')}
        {/* Is not a post or the home page */}
        {router.pathname.indexOf("post") == -1 && router.pathname !== '/' ? (<meta key="twitter:title" name="twitter:title" content={`${props.metaTitle}`} />) : ('')}

        <meta name="description" content={props.description ? props.description : Config.description} key="description" />
        <meta key="twitter:description" name="twitter:description" content={props.description ? props.description : Config.description} />
        <meta property="og:description" content={props.description ? props.description : Config.description} key="og:description" />

        {/* Is not a post page */}
        {router.pathname.indexOf("post") == -1 ? (<meta property="og:image" content={props.metaImg ? props.metaImg : Config.metaImg} key="og:image" />) : ('')}
        {router.pathname.indexOf("post") == -1 ? (<meta key="twitter:image" name="twitter:image" content={props.metaImg ? props.metaImg : Config.metaImg}></meta>) : ('')}

        {/* Is post page */}
        {props.post && (
          <>
            <meta key="twitter:image" name="twitter:image" content={`${process.env.baseUrl}${props.post.image}`}></meta>
            <meta property="og:image" content={`${process.env.baseUrl}${props.post.image}`} key="og:image" />
            <meta property="article:published_time" content={new Date(props.post.date).toISOString()} key="article:published_time" />
            <meta property="article:modified_time" content={new Date(props.post.modified_date).toISOString()} key="article:modified_time" />
            <script type="application/ld+json"

              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html:
                  `{
                    "description": "${props.description ? props.description : Config.description}",
                    "author": {
                      "@type": "Person",
                      "name": "${props.pauthor ? props.pauthor : Config.author}"
                    },
                    "@type": "BlogPosting",
                    "url": "${Config.url}${process.env.baseUrl}${addTrailingSlash(router.asPath)}",
                    "publisher": {
                      "@type": "Organization",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "${Config.url}${process.env.baseUrl}https://www.idr.cat/img/brand-img.png"
                      },
                      "name": "${props.pauthor ? props.pauthor : Config.author}"
                    },
                    "headline": "${props.title} | ${Config.title}",
                    "image": ["${Config.url}${process.env.baseUrl}${props.post.image}"],
                    "datePublished": "${new Date(props.post.date).toISOString()}",
                    "dateModified": "${new Date(props.post.modified_date).toISOString()}",
                    "mainEntityOfPage": {
                      "@type": "WebPage",
                      "@id": "${Config.url}${process.env.baseUrl}${addTrailingSlash(router.asPath)}"
                    },
                    "@context": "http://schema.org"
                }`,
              }}
              key="ldjson"
            />
          </>
        )}

        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:locale" content={Config.locale} key="og:locale" />
        <meta property="og:site_name" content={Config.site_name} key="og:site_name" />

        <meta key="twitter:site" name="twitter:site" content="@akashalabs" />
        <meta key="twitter:creator" name="twitter:creator" content="@akashalabs" />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image"></meta>

        <meta name="author" content={props.pauthor ? props.pauthor : Config.author} key="author" />

        <link rel="preload" as="image" href="/logos/logo.png" />
        <link rel="preload" as="image" href="/logos/logo-black.png" />

      </Head>
    </>
  );
};

export { Meta };
