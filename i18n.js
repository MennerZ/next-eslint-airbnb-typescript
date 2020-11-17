import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import th from './public/locales/th/common.json';
import en from './public/locales/en/common.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      th: {
        translation: th,
      },
      en: {
        translation: en,
      },
    },
    lng: 'th',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
