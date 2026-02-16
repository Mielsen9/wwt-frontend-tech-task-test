import { FilterItem } from '@/shared/api/types/Filter'

import { FilterCheckbox } from '../ui'

interface FilterSectionProps {
	filterItem: FilterItem
	selectedOptions: string[]
	onToggle: (filterId: string, optionId: string) => void
}

export const FilterSection = ({
	filterItem,
	selectedOptions,
	onToggle
}: FilterSectionProps) => {
	return (
		<section
			aria-labelledby={`sec-${filterItem.id}`}
			style={{ padding: '14px', borderBottom: '1px solid #f3f4f6' }}
		>
			<h3
				id={`sec-${filterItem.id}`}
				style={{
					fontSize: 13,
					fontWeight: 600,
					color: '#111827',
					margin: '0 0 10px 0'
				}}
			>
				{filterItem.name}
			</h3>

			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
					gap: '8px 16px'
				}}
			>
				{filterItem.options.map(option => (
					<FilterCheckbox
						key={option.id}
						id={`${filterItem.id}__${option.id}`}
						label={option.name}
						checked={selectedOptions.includes(option.id)}
						onChange={() => onToggle(filterItem.id, option.id)}
					/>
				))}
			</div>
		</section>
	)
}
