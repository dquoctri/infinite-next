import Link from 'next/link'

export default function DashboardLayout({
  children, // will be a page or nested layout
  analytics,
  team
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      
      {children}
    </section>
  )
}