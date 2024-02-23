import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import nl from './locales/nl.json'

const i18n = createI18n({
  locale: document.documentElement.lang ?? 'nl',
  fallbackLocale: 'en',
  messages: { en, nl }
})

export default i18n
