import { BRAND_COLOR } from '../../constants/filterData'
import type { Lang } from '../../i18n/translations'

interface LanguageSwitcherProps {
	lang: Lang
	onChange: (lang: Lang) => void
}

const LANGS: Lang[] = ['en', 'uk']

export const LanguageSwitcher = ({ lang, onChange }: LanguageSwitcherProps) => {
	return (
		<div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
			{LANGS.map(language => {
				const isActive = lang === language
				return (
					<button
						key={language}
						onClick={() => onChange(language)}
						style={{
							padding: '4px 14px',
							borderRadius: 9999,
							fontSize: 12,
							fontWeight: 600,
							border: '1px solid',
							borderColor: isActive ? BRAND_COLOR : '#d1d5db',
							background: isActive ? BRAND_COLOR : 'white',
							color: isActive ? 'white' : '#374151',
							cursor: 'pointer',
							transition: 'all 0.15s'
						}}
					>
						{language.toUpperCase()}
					</button>
				)
			})}
		</div>
	)
}
