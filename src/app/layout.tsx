import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hello World - Simple Next.js App',
  description: 'A simple and elegant Hello World page built with Next.js and Tailwind CSS',
  keywords: ['Next.js', 'React', 'Hello World', 'Tailwind CSS'],
  authors: [{ name: 'Developer' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}