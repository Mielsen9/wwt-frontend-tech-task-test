// Input format from API / filterData.json
export interface FilterOption {
	id: string
	name: string
	description?: string
}

export interface FilterItem {
	id: string
	name: string
	description?: string
	type: 'OPTION'
	options: FilterOption[]
}

export interface FilterData {
	filterItems: FilterItem[]
}

// Output format — what gets saved to global state and sent to API
export type SearchRequestFilter = Record<string, string[]>
