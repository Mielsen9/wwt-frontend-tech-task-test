import { useQuery } from '@tanstack/react-query'

import { FilterChoose, FilterType } from '../../../shared/api/types/Filter'
import filterData from '../../../shared/temp/filterData.json'

export const useFilterData = () => {
	return useQuery<FilterChoose[]>({
		queryKey: ['filter-data'],
		queryFn: async () => {
			return filterData.filterItems.map(item => ({
				...item,
				type: item.type as FilterType
			}))
		},
		staleTime: Infinity,
		gcTime: Infinity
	})
}
