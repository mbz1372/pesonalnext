import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  const { t } = useTranslation('common')
  return (
    <section className="text-center py-20">
      <Image src="/profile-placeholder.png" alt="profile" width={120} height={120} className="mx-auto rounded-full mb-4" />
      <h1 className="text-3xl font-bold mb-2">{t('home.greeting')}</h1>
      <p className="mb-4 text-xl text-gray-600 dark:text-gray-300">{t('home.titles')}</p>
      <div className="flex justify-center gap-4">
        <Link href="/resume.pdf" className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>{t('home.download_cv')}</Link>
        <Link href="/projects" className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>{t('home.view_projects')}</Link>
        <Link href="/contact" className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>{t('home.contact')}</Link>
      </div>
    </section>
  )
}
