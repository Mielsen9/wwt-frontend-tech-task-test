import { useCallback, useEffect, useState } from 'react'

import { FilterType } from '@/shared/api/types/Filter/FilterType.ts'
import { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter.ts'

export const useFilterState = (savedFilter: SearchRequestFilter) => {
	const [local, setLocal] = useState<SearchRequestFilter>([])

	useEffect(() => {
		setLocal([...savedFilter])
	}, [savedFilter])

	const toggleOption = useCallback((filterId: string, optionId: string) => {
		setLocal(prev => {
			const existing = prev.find(item => item.id === filterId)

			if (!existing) {
				return [
					...prev,
					{ id: filterId, type: FilterType.OPTION, optionsIds: [optionId] }
				]
			}

			const updatedIds = existing.optionsIds.includes(optionId)
				? existing.optionsIds.filter(id => id !== optionId)
				: [...existing.optionsIds, optionId]

			if (updatedIds.length === 0) {
				return prev.filter(item => item.id !== filterId)
			}

			return prev.map(item =>
				item.id === filterId ? { ...item, optionsIds: updatedIds } : item
			)
		})
	}, [])

	const reset = useCallback(() => {
		setLocal([...savedFilter])
	}, [savedFilter])

	const clearAll = useCallback(() => {
		setLocal([])
	}, [])

	return { local, toggleOption, reset, clearAll }
}
