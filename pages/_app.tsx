import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Inter, Vazirmatn } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-en' })
const vazir = Vazirmatn({ subsets: ['arabic'], variable: '--font-fa' })

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const dir = router.locale === 'fa' ? 'rtl' : 'ltr'
    document.documentElement.dir = dir
    document.documentElement.lang = router.locale ?? 'en'
  }, [router.locale])

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className={`${inter.variable} ${vazir.variable}`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
