import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import SectionContainer from '../components/SectionContainer'
import ExperienceCard from '../components/ExperienceCard'
import { experience } from '../data/experience'
import { useTranslation } from 'next-i18next'

export default function ExperiencePage() {
  const { t } = useTranslation('common')
  return (
    <Layout>
      <SectionContainer>
        <h1 className="text-2xl font-bold mb-4">{t('experience.title')}</h1>
        {experience.map((item) => (
          <ExperienceCard key={item.company} item={item} />
        ))}
      </SectionContainer>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common']))
  }
})
