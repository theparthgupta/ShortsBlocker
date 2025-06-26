import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Shorts Blocker',
  description: 'Kill the scroll. Reclaim your time. Block short-form distractions on YouTube, TikTok, Instagram, and more.',
  generator: 'Shorts Blocker',
  openGraph: {
    title: 'Shorts Blocker',
    description: 'Kill the scroll. Reclaim your time. Block short-form distractions on YouTube, TikTok, Instagram, and more.',
    url: 'https://shorts-blocker.vercel.app',
    siteName: 'Shorts Blocker',
    images: [
      {
        url: '/placeholder-logo.png',
        width: 1200,
        height: 630,
        alt: 'Shorts Blocker',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
