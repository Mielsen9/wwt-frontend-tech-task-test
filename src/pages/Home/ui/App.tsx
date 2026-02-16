import { useState } from 'react'

import { IconFilter } from '../components/ui'
import { BRAND_COLOR } from '../constants/filterData'
import { DebugPanel, FilterModal, LanguageSwitcher } from '../features/filter'
import { useTranslation } from '../hooks/useTranslation'
import type { Lang } from '../i18n/translations'
import { useFilterStore } from '../store/filterStore'
import { countSelected } from '../utils/filter.utils'

export const App = () => {
	const [lang, setLang] = useState<Lang>('en')
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const [savedFilter, setSavedFilter] = useFilterStore()
	const { t } = useTranslation(lang)

	const total = countSelected(savedFilter)

	return (
		<main
			style={{
				minHeight: '100vh',
				background: '#f9fafb',
				padding: '40px 32px',
				fontFamily:
					"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
			}}
		>
			<div style={{ maxWidth: 640, margin: '0 auto' }}>
				<LanguageSwitcher
					lang={lang}
					onChange={setLang}
				/>

				<header style={{ marginBottom: 32 }}>
					<h1
						style={{
							fontSize: 26,
							fontWeight: 700,
							color: '#111827',
							margin: '0 0 4px 0'
						}}
					>
						{t('app_title')}
					</h1>
					<p style={{ fontSize: 14, color: '#6b7280', margin: 0 }}>
						{t('subtitle')}
					</p>
				</header>

				<button
					onClick={() => setIsFilterOpen(true)}
					aria-haspopup="dialog"
					style={{
						display: 'inline-flex',
						alignItems: 'center',
						gap: 8,
						background: BRAND_COLOR,
						color: 'white',
						border: 'none',
						borderRadius: 9999,
						padding: '12px 24px',
						fontSize: 14,
						fontWeight: 600,
						cursor: 'pointer',
						boxShadow: '0 4px 14px rgba(255,107,53,0.35)',
						marginBottom: 32
					}}
				>
					<IconFilter />
					{t('open_filter')}
					{total > 0 && (
						<span
							style={{
								background: 'white',
								color: BRAND_COLOR,
								borderRadius: 9999,
								fontSize: 11,
								fontWeight: 700,
								padding: '2px 8px',
								marginLeft: 4
							}}
						>
							{total}
						</span>
					)}
				</button>

				<DebugPanel
					savedFilter={savedFilter}
					t={t}
				/>
			</div>

			<FilterModal
				isOpen={isFilterOpen}
				onClose={() => setIsFilterOpen(false)}
				savedFilter={savedFilter}
				onSave={setSavedFilter}
				t={t}
			/>
		</main>
	)
}
