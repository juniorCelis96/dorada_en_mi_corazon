import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'La Dorada en Mi Corazón - Turismo, Gastronomía y Cultura de Caldas',
  description: 'Descubre los atractivos turísticos, la gastronomía, la cultura y la economía de La Dorada, Norcasia, Victoria y Samaná en Caldas, Colombia.',
  keywords: 'La Dorada, Caldas, turismo, gastronomía, cultura, Norcasia, Victoria, Samaná',
  openGraph: {
    title: 'La Dorada en Mi Corazón',
    description: 'Plataforma de promoción turística de los municipios de Caldas',
    type: 'website'
  }
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es' className={inter.variable}>
      <body className='min-h-screen bg-white text-gray-900 antialiased'>
        <Navbar />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
