export default function SkillGrid({ skills }: { skills: string[] }) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {skills.map((skill) => (
        <li key={skill} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm text-center">
          {skill}
        </li>
      ))}
    </ul>
  )
}
