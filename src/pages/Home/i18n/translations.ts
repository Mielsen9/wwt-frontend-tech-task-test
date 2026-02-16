export type Lang = 'en' | 'uk'

export const TRANSLATIONS: Record<Lang, Record<string, string>> = {
	en: {
		appTitle: 'Hotel Search',
		subtitle: 'Find your perfect accommodation',
		openFilter: 'Open Filters',
		debugLabel: 'Current Filter (Debug JSON):',
		noFilter: 'No filters applied',
		filterTitle: 'Filter',
		apply: 'Apply',
		clearAll: 'Clear all parameters',
		close: 'Close',
		confirmTitle: 'Do you want to apply new filter',
		useOld: 'Use old filter',
		applyNew: 'Apply new filter'
	},
	uk: {
		appTitle: 'Пошук готелів',
		subtitle: 'Знайдіть ідеальне житло',
		openFilter: 'Відкрити фільтри',
		debugLabel: 'Поточний фільтр (Debug JSON):',
		noFilter: 'Фільтри не застосовані',
		filterTitle: 'Фільтр',
		apply: 'Застосувати',
		clearAll: 'Очистити всі параметри',
		close: 'Закрити',
		confirmTitle: 'Застосувати новий фільтр?',
		useOld: 'Використати старий фільтр',
		applyNew: 'Застосувати новий фільтр'
	}
}
