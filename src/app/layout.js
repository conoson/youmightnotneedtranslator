import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YouMightNotNeedTranslator',
  description: 'I am sure you can do it without a translator.',
}

export const viewport = {
  initialScale: 1,
  width: 'device-width'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" />
    </html>
  )
}
