import React from 'react';
import type { FC } from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import HomeView from '../src/views/home/HomeView';

const Home: FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>{t('home.header.title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeView />
    </div>
  );
};
export default Home;
