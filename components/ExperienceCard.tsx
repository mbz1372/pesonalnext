export interface Experience {
  company: string
  role: string
  duration: string
  description: string
}

export default function ExperienceCard({ item }: { item: Experience }) {
  return (
    <div className="border rounded p-4 shadow mb-4">
      <h3 className="font-semibold">{item.company}</h3>
      <p className="text-sm text-gray-500">{item.role} • {item.duration}</p>
      <p className="mt-2 text-sm">{item.description}</p>
    </div>
  )
}
