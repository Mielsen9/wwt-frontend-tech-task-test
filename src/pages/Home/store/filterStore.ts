import { create } from 'zustand'

import { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter.ts'

interface FilterStore {
	savedFilter: SearchRequestFilter
	setSavedFilter: (filter: SearchRequestFilter) => void
	clearFilter: () => void
}

export const useFilterStore = create<FilterStore>(set => ({
	savedFilter: [],

	setSavedFilter: filter => set({ savedFilter: filter }),

	clearFilter: () => set({ savedFilter: [] })
}))
