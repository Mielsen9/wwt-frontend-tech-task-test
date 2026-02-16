import type { SearchRequestFilter } from '../../types/filter.types'
import { hasSelections } from '../../utils/filter.utils'

interface DebugPanelProps {
	savedFilter: SearchRequestFilter
	ti: (key: string) => string
}

export const DebugPanel = ({ savedFilter, ti }: DebugPanelProps) => {
	return (
		<section
			aria-label={ti('debug_label')}
			style={{
				background: 'white',
				borderRadius: 12,
				border: '1px solid #e5e7eb',
				padding: 20,
				boxShadow: '0 1px 3px rgba(0,0,0,0.07)'
			}}
		>
			<h2
				style={{
					fontSize: 11,
					fontWeight: 600,
					color: '#9ca3af',
					textTransform: 'uppercase',
					letterSpacing: '0.05em',
					margin: '0 0 12px 0'
				}}
			>
				{ti('debugLabel')}
			</h2>

			{!hasSelections(savedFilter) ? (
				<p
					style={{
						fontSize: 13,
						color: '#9ca3af',
						fontStyle: 'italic',
						margin: 0
					}}
				>
					{ti('noFilter')}
				</p>
			) : (
				<pre
					style={{
						background: '#f9fafb',
						border: '1px solid #e5e7eb',
						borderRadius: 8,
						padding: 16,
						fontFamily: "'Courier New', monospace",
						fontSize: 12,
						color: '#1f2937',
						whiteSpace: 'pre-wrap',
						wordBreak: 'break-all',
						overflow: 'auto',
						maxHeight: 300,
						margin: 0
					}}
				>
					{JSON.stringify(savedFilter, null, 2)}
				</pre>
			)}
		</section>
	)
}
