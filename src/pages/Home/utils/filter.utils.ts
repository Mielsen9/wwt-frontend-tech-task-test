import type { SearchRequestFilter } from '../types/filter.types'

export const countSelected = (filter: SearchRequestFilter): number => {
	return Object.values(filter).flat().length
}

export const hasSelections = (filter: SearchRequestFilter): boolean => {
	return countSelected(filter) > 0
}
