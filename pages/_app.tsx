import '../i18n';
import '../styles/globals.css';
import React, { useEffect } from 'react';
import type { AppContext, AppInitialProps, AppProps } from 'next/app';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { NextComponentType } from 'next';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  useEffect(() => {
    i18n?.changeLanguage(locale || '');
  }, [locale]);

  return <Component {...pageProps} />;
};

export default MyApp;
