import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
  resources: { // Import translations you made from certain path.
    en: {
        translation: require('../src/locales/en/translation.json')
    },
    vi: {
      translation: require('../src/locales/vi/translation.json')
    }
  },
  debug: process.env.NODE_ENV === "development",
  fallbackLng: 'en', // Set default language
  interpolation: {
    escapeValue: false,
  },
})

export default i18n