import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { t } = useTranslation('common')
  return (
    <header className="w-full py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4">
        <nav className="flex gap-4">
          <Link href="/">{t('nav.home')}</Link>
          <Link href="/about">{t('nav.about')}</Link>
          <Link href="/experience">{t('nav.experience')}</Link>
          <Link href="/projects">{t('nav.projects')}</Link>
          <Link href="/contact">{t('nav.contact')}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
