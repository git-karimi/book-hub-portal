import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Book Hub — Portal',
  description: 'کانون کتاب — پروژه‌های دیجیتال',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
