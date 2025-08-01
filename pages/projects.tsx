import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import SectionContainer from '../components/SectionContainer'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useTranslation } from 'next-i18next'

export default function ProjectsPage() {
  const { t } = useTranslation('common')
  return (
    <Layout>
      <SectionContainer>
        <h1 className="text-2xl font-bold mb-4">{t('projects.title')}</h1>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
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
