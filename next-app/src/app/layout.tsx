import type { Metadata } from 'next'
import ThemeProvider from './theme-provider'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Infinite Next App',
  description: 'Made by deadl!ne with love!',
}

export default function RootLayout(props: {
  children: React.ReactNode
  navbars: React.ReactNode
  footer: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider>
        {props.navbars}
        {props.children}
        {props.footer}
      </ThemeProvider>
      </body>
    </html>
  )
}
