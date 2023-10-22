import Link from 'next/link'

export default function Template({
  children
}: {
  children: React.ReactNode
}) {
  return <section>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/dashboard/analytics">Analytics</Link>
      <Link href="/dashboard/settings">Settings</Link>
    </nav>
    <div>
      {children}
    </div>
  </section>
}