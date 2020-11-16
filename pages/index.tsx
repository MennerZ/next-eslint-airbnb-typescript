import React from 'react';
import type { FC } from 'react';
import Head from 'next/head';
import HomeView from '../src/views/home/HomeView';

const Home: FC = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomeView />
  </div>
);

export default Home;
