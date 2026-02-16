import { useCallback, useEffect, useState } from 'react'

import type { SearchRequestFilter } from '../types/filter.types'

export const useFilterState = (savedFilter: SearchRequestFilter) => {
	const [local, setLocal] = useState<SearchRequestFilter>({})
	useEffect(() => {
		setLocal({ ...savedFilter })
	}, [savedFilter])

	const toggleOption = useCallback((filterId: string, optionId: string) => {
		setLocal(prev => {
			const current = prev[filterId] ?? []
			const updated = current.includes(optionId)
				? current.filter(id => id !== optionId)
				: [...current, optionId]

			if (updated.length === 0) {
				return Object.fromEntries(
					Object.entries(prev).filter(([key]) => key !== filterId)
				)
			}

			return { ...prev, [filterId]: updated }
		})
	}, [])

	const reset = useCallback(() => {
		setLocal({ ...savedFilter })
	}, [savedFilter])

	const clearAll = useCallback(() => {
		setLocal({})
	}, [])

	return { local, toggleOption, reset, clearAll }
}
