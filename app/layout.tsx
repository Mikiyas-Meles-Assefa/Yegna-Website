import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yegna Write',
  description: 'Empowering Ethiopian students with expert guidance for global educational opportunities.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
