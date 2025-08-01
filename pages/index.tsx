import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import SectionContainer from '../components/SectionContainer'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useTranslation } from 'next-i18next'

export default function Home() {
  const { t } = useTranslation('common')
  return (
    <Layout>
      <HeroSection />
      <SectionContainer>
        <h2 className="text-2xl font-semibold mb-4">{t('projects.title')}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.slice(0,2).map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </SectionContainer>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common']))
  }
})
