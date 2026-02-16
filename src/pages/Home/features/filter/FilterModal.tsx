import { useState } from 'react'

import { ConfirmationDialog, FilterSection } from '../../components/filter'
import { IconClose } from '../../components/ui'
import { BRAND_COLOR, FILTER_DATA } from '../../constants/filterData'
import { useFilterState } from '../../hooks/useFilterState'
import type { SearchRequestFilter } from '../../types/filter.types'

interface FilterModalProps {
	isOpen: boolean
	onClose: () => void
	savedFilter: SearchRequestFilter
	onSave: (filter: SearchRequestFilter) => void
	ti: (key: string) => string
}

export const FilterModal = ({
	isOpen,
	onClose,
	savedFilter,
	onSave,
	ti
}: FilterModalProps) => {
	const { local, toggleOption, reset, clearAll } = useFilterState(savedFilter)
	const [showConfirm, setShowConfirm] = useState(false)

	const handleClose = () => {
		reset()
		onClose()
	}

	const handleApplyClick = () => setShowConfirm(true)

	const handleConfirm = () => {
		onSave(local)
		setShowConfirm(false)
		onClose()
	}

	const handleCancel = () => {
		reset()
		setShowConfirm(false)
	}

	if (!isOpen) {
		return null
	}

	return (
		<>
			{/* Backdrop */}
			<div
				style={{
					position: 'fixed',
					inset: 0,
					zIndex: 40,
					background: 'rgba(0,0,0,0.5)',
					display: 'flex',
					alignItems: 'flex-start',
					justifyContent: 'center',
					overflowY: 'auto',
					padding: 16
				}}
				onClick={e => {
					if (e.target === e.currentTarget) {
						handleClose()
					}
				}}
			>
				{/* Panel */}
				<div
					role="dialog"
					aria-modal="true"
					aria-labelledby="filter-modal-title"
					style={{
						position: 'relative',
						background: 'white',
						borderRadius: 12,
						boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
						width: '100%',
						maxWidth: 440,
						display: 'flex',
						flexDirection: 'column',
						marginTop: 40,
						maxHeight: '85vh'
					}}
				>
					{/* Header */}
					<header
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: '16px 24px',
							borderBottom: '1px solid #f3f4f6',
							flexShrink: 0
						}}
					>
						<h2
							id="filter-modal-title"
							style={{
								margin: 0,
								fontSize: 15,
								fontWeight: 600,
								color: '#111827'
							}}
						>
							{ti('filterTitle')}
						</h2>
						<button
							onClick={handleClose}
							aria-label={ti('close')}
							style={{
								background: 'none',
								border: 'none',
								cursor: 'pointer',
								color: '#9ca3af',
								padding: 4,
								borderRadius: 9999,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<IconClose />
						</button>
					</header>

					{/* Scrollable body */}
					<div style={{ overflowY: 'auto', flexGrow: 1, padding: '0 24px' }}>
						{FILTER_DATA.filterItems.map(item => (
							<FilterSection
								key={item.id}
								filterItem={item}
								selectedOptions={local[item.id] ?? []}
								onToggle={toggleOption}
							/>
						))}
					</div>

					{/* Footer */}
					<footer
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: '16px 24px',
							borderTop: '1px solid #f3f4f6',
							flexShrink: 0
						}}
					>
						<button
							onClick={handleApplyClick}
							style={{
								background: BRAND_COLOR,
								color: 'white',
								border: 'none',
								borderRadius: 9999,
								padding: '10px 28px',
								fontSize: 14,
								fontWeight: 600,
								cursor: 'pointer'
							}}
						>
							{ti('apply')}
						</button>

						<button
							onClick={clearAll}
							style={{
								background: 'none',
								border: 'none',
								color: BRAND_COLOR,
								fontSize: 13,
								fontWeight: 500,
								cursor: 'pointer',
								padding: 0
							}}
						>
							{ti('clearAll')}
						</button>
					</footer>
				</div>
			</div>

			<ConfirmationDialog
				isOpen={showConfirm}
				onConfirm={handleConfirm}
				onCancel={handleCancel}
				ti={ti}
			/>
		</>
	)
}
