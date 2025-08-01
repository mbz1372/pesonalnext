import { ReactNode } from 'react'

export default function SectionContainer({ children, className }: { children: ReactNode, className?: string }) {
  return <section className={`max-w-4xl mx-auto px-4 py-8 ${className || ''}`}>{children}</section>
}
