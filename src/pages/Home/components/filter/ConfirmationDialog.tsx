import { BRAND_COLOR } from '../../constants/filterData'

interface ConfirmationDialogProps {
	isOpen: boolean
	onConfirm: () => void
	onCancel: () => void
	ti: (key: string) => string
}

export const ConfirmationDialog = ({
	isOpen,
	onConfirm,
	onCancel,
	ti
}: ConfirmationDialogProps) => {
	if (!isOpen) {
		return null
	}

	return (
		<div
			role="dialog"
			aria-modal="true"
			aria-labelledby="confirm-title"
			style={{
				position: 'fixed',
				inset: 0,
				zIndex: 50,
				display: 'flex',
				alignItems: 'flex-start',
				justifyContent: 'center',
				paddingTop: 100,
				background: 'rgba(0,0,0,0.4)'
			}}
			onClick={onCancel}
		>
			<div
				style={{
					background: 'white',
					borderRadius: 12,
					boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
					width: '100%',
					maxWidth: 360,
					margin: '0 16px',
					padding: '32px 24px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 24
				}}
				onClick={e => e.stopPropagation()}
			>
				<h2
					id="confirm-title"
					style={{
						fontSize: 15,
						fontWeight: 500,
						color: '#1f2937',
						textAlign: 'center',
						margin: 0
					}}
				>
					{ti('confirmTitle')}
				</h2>

				<div
					style={{
						display: 'flex',
						gap: 12,
						justifyContent: 'center',
						width: '100%'
					}}
				>
					<button
						onClick={onCancel}
						style={{
							padding: '10px 20px',
							borderRadius: 9999,
							border: '1px solid #d1d5db',
							background: 'white',
							fontSize: 13,
							fontWeight: 500,
							color: '#374151',
							cursor: 'pointer'
						}}
					>
						{ti('useOld')}
					</button>

					<button
						onClick={onConfirm}
						style={{
							padding: '10px 20px',
							borderRadius: 9999,
							border: 'none',
							background: BRAND_COLOR,
							color: 'white',
							fontSize: 13,
							fontWeight: 600,
							cursor: 'pointer'
						}}
					>
						{ti('applyNew')}
					</button>
				</div>
			</div>
		</div>
	)
}
