import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './globalicons.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CodexMystica',
  description: 'A mystical gateway to the world of Dungeons & Dragons. A comprehensive repository of arcane knowledge, powered by the DnD 5e API. Explore legendary creatures, unravel enchantments, and delve into the depths of magical lore. Unleash your imagination and embark on epic adventures armed with the knowledge found within this enchanted repository',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
