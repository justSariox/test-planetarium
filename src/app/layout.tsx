import '@/styles/index.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import App from "@/app/pages/_app";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Planetarium test',
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
