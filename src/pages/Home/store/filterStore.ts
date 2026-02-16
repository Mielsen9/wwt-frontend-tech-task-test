import { create } from 'zustand'

import type { SearchRequestFilter } from '../types/filter.types'

interface FilterStore {
	savedFilter: SearchRequestFilter
	setSavedFilter: (filter: SearchRequestFilter) => void
	clearFilter: () => void
}

export const useFilterStore = create<FilterStore>(set => ({
	savedFilter: {},

	setSavedFilter: filter => set({ savedFilter: filter }),

	clearFilter: () => set({ savedFilter: {} })
}))
