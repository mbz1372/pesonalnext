import Link from 'next/link'

export interface Project {
  name: string
  tech: string
  link: string
  description: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition">
      <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
      <p className="text-sm mb-2">{project.description}</p>
      <p className="text-xs mb-2 text-gray-500">{project.tech}</p>
      <Link href={project.link} className="text-blue-500 hover:underline">GitHub</Link>
    </div>
  )
}
