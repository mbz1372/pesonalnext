'use client'
import { useRouter } from 'next/router'

export default function LanguageSwitcher() {
  const router = useRouter()
  const { pathname, asPath, query, locale } = router
  const toggle = locale === 'fa' ? 'en' : 'fa'
  const label = toggle === 'fa' ? 'فارسی' : 'EN'
  return (
    <button onClick={() => router.push({ pathname, query }, asPath, { locale: toggle })} className="px-2 py-1 border rounded">
      {label}
    </button>
  )
}
