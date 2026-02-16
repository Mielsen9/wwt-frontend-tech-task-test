import { BRAND_COLOR } from '../../constants/filterData'

interface FilterCheckboxProps {
	id: string
	label: string
	checked: boolean
	onChange: () => void
}

export const FilterCheckbox = ({
	id,
	label,
	checked,
	onChange
}: FilterCheckboxProps) => {
	return (
		<label
			htmlFor={id}
			style={{
				display: 'flex',
				alignItems: 'flex-start',
				gap: 8,
				cursor: 'pointer'
			}}
		>
			<input
				id={id}
				type="checkbox"
				checked={checked}
				onChange={onChange}
				style={{
					marginTop: 2,
					width: 15,
					height: 15,
					flexShrink: 0,
					accentColor: BRAND_COLOR,
					cursor: 'pointer'
				}}
			/>
			<span style={{ fontSize: 12, color: '#4b5563', lineHeight: 1.5 }}>
				{label}
			</span>
		</label>
	)
}
