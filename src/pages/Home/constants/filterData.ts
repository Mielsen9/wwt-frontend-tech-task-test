import type { FilterData } from '../types/filter.types'

export const BRAND_COLOR = '#FF6B35'

export const FILTER_DATA: FilterData = {
	filterItems: [
		{
			id: 'MEAL_OPTIONS',
			name: 'Meal options',
			description: 'Choose the type of dining',
			type: 'OPTION',
			options: [
				{ id: 'breakfast', name: 'Breakfast included' },
				{ id: 'lunch', name: 'Lunch included' },
				{ id: 'dinner', name: 'Dinner included' },
				{ id: 'all-inclusive', name: 'All inclusive' }
			]
		},
		{
			id: 'RULES_POLICIES_PAYMENT',
			name: 'Rules, Policies, and Payment',
			type: 'OPTION',
			options: [
				{ id: 'free-cancellation', name: 'Free cancellation' },
				{ id: 'pets-allowed', name: 'Pets allowed' },
				{ id: 'non-smoking-room', name: 'Non-Smoking room' }
			]
		},
		{
			id: 'FACILITIES',
			name: 'Facilities',
			description: 'Room and hotel facilities',
			type: 'OPTION',
			options: [
				{ id: 'private-bathroom', name: 'Private bathroom' },
				{ id: 'air-conditioning', name: 'Air conditioning' },
				{ id: 'heating', name: 'Heating' },
				{ id: 'coffee-tea-maker', name: 'Coffee/Tea maker' },
				{ id: 'shuttle-service', name: 'Shuttle service' },
				{ id: 'wi-fi', name: 'Wi-Fi' },
				{ id: 'parking', name: 'Parking' },
				{ id: 'pool', name: 'Pool' }
			]
		},
		{
			id: 'BED_TYPE',
			name: 'Bed type',
			description: 'Choose the preferred bed type',
			type: 'OPTION',
			options: [
				{ id: 'twin-beds', name: 'Twin beds' },
				{ id: 'double-bed', name: 'Double Bed' }
			]
		},
		{
			id: 'HEALTH_ENTERTAINMENT_SPORTS',
			name: 'Health, Entertainment, and Sports',
			type: 'OPTION',
			options: [
				{ id: 'gym', name: 'Gym' },
				{ id: 'spa', name: 'Spa' },
				{ id: 'sauna', name: 'Sauna' }
			]
		}
	]
}
