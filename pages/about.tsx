import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import SectionContainer from '../components/SectionContainer'
import SkillGrid from '../components/SkillGrid'
import { useTranslation } from 'next-i18next'

export default function About() {
  const { t } = useTranslation('common')
  const skills = ['Product Management', 'TypeScript', 'Node.js', 'SQL']
  return (
    <Layout>
      <SectionContainer>
        <h1 className="text-2xl font-bold mb-4">{t('about.title')}</h1>
        <p className="mb-4">{t('about.bio')}</p>
        <h2 className="text-xl font-semibold mb-2">{t('about.skills')}</h2>
        <SkillGrid skills={skills} />
      </SectionContainer>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common']))
  }
})
