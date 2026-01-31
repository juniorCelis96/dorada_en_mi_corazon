import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'

export function Hero () {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-primary-600 via-river-600 to-warm-500'>
      <div className='absolute inset-0 bg-black/20' />
      <div className='relative container mx-auto px-4 py-24 md:py-32'>
        <div className='mx-auto max-w-3xl text-center'>
          <div className='mb-6 inline-flex items-center space-x-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm'>
            <MapPin className='h-5 w-5 text-white' />
            <span className='text-sm font-medium text-white'>Caldas, Colombia</span>
          </div>
          <h1 className='mb-6 text-4xl font-bold text-white md:text-6xl'>
            <span className='text-warm-200'>Senderos sin límites</span>
          </h1>
          <h2 className='mb-6 text-2xl font-semibold text-white md:text-3xl'>
            Descubre la Magia de Caldas
          </h2>
          <p className='mb-8 text-xl text-white/90 md:text-2xl'>
            Explora la riqueza turística, gastronómica, cultural y económica de los municipios de Caldas
          </p>
          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Link
              href='/municipios'
              className='inline-flex items-center space-x-2 rounded-lg bg-white px-8 py-3 font-semibold text-primary-600 transition-all hover:bg-gray-100 hover:shadow-lg'
            >
              <span>Explorar Municipios</span>
              <ArrowRight className='h-5 w-5' />
            </Link>
            <Link
              href='/turismo'
              className='inline-flex items-center space-x-2 rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white/10'
            >
              <span>Ver Atractivos</span>
            </Link>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent' />
    </section>
  )
}
