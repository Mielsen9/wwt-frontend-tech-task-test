import { type Lang, TRANSLATIONS } from '../i18n/translations'

export const useTranslation = (lang: Lang) => {
	const ti = (key: string): string => TRANSLATIONS[lang]?.[key] ?? key
	return { ti }
}
