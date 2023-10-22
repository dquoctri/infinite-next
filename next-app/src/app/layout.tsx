import type { Metadata } from 'next'
import ThemeProvider from './theme-provider'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Infinite Next App',
  description: 'Made by deadl!ne with love!',
}

export default function RootLayout(props: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider>{props.children}</ThemeProvider>
      </body>
    </html>
  )
}
