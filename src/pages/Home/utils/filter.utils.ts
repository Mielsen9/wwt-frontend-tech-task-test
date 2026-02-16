import { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter.ts'

export const countSelected = (filter: SearchRequestFilter): number => {
	return Object.values(filter).flat().length
}

export const hasSelections = (filter: SearchRequestFilter): boolean => {
	return countSelected(filter) > 0
}
