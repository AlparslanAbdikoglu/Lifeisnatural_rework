
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import hu from './locales/hu.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      hu: { common: hu }
    },
    lng: 'hu', // Default language
    fallbackLng: 'en', // Fallback language in case a translation is missing
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
