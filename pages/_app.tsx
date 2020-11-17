import '../i18n';
import React, { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  useEffect(() => {
    i18n?.changeLanguage(locale || '');
  }, [locale]);

  return <Component {...pageProps} />;
}

export default MyApp;
