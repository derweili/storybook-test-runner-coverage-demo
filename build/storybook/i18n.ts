import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { locales } from '../../src'

i18n.use(initReactI18next).init({
  resources: {
    de: {
      translation: locales.de
    }
  },
  fallbackLng: "de",
  lng: "de",
  load: "languageOnly",
  react: { useSuspense: false },
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
