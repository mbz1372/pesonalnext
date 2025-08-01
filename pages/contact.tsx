import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import SectionContainer from '../components/SectionContainer'
import { useTranslation } from 'next-i18next'

export default function ContactPage() {
  const { t } = useTranslation('common')
  return (
    <Layout>
      <SectionContainer>
        <h1 className="text-2xl font-bold mb-4">{t('contact.title')}</h1>
        <form className="space-y-4 max-w-md">
          <input type="text" placeholder={t('contact.name')} className="w-full border rounded p-2" />
          <input type="email" placeholder={t('contact.email')} className="w-full border rounded p-2" />
          <textarea placeholder={t('contact.message')} className="w-full border rounded p-2" rows={4}></textarea>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">{t('contact.send')}</button>
        </form>
      </SectionContainer>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common']))
  }
})
