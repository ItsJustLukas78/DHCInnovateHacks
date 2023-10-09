import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Innovate Hacks',
  description: 'Dublin Hack Club\'s Innovate Hacks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="w-full">
          {children}
        </div>
      </body>
    </html>
  )
}
