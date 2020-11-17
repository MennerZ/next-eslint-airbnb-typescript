import React from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

const HomeView: FC = () => {
  const { t } = useTranslation();
  return <div>{t('home.content.greeting')}</div>;
};

export default HomeView;
