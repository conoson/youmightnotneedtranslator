export const fallbackLng = 'en'
export const languages = [fallbackLng, 'de', 'ko', 'ja']
export const languageNames = {
  [fallbackLng]: 'English',
  de: 'Deutsch',
  ko: '한국어',
  ja: '日本語'
}
export const languageEnglishNames = {
  [fallbackLng]: 'united-states',
  de: 'german',
  ko: 'south-korea',
  ja: 'japan'
}

export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}