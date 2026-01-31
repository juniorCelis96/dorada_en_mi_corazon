import { Hero } from '@/components/Hero'
import { MunicipiosGrid } from '@/components/MunicipiosGrid'
import { EventsCalendar } from '@/components/EventsCalendar'
import { getAllMunicipios } from '@/data/municipiosData'
import { getUpcomingEvents } from '@/data/cultureData'
import { MapPin, Utensils, Palette, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function HomePage () {
  const municipios = getAllMunicipios()
  const eventos = getUpcomingEvents().slice(0, 3)

  return (
    <>
      <Hero />

      {/* Features Section */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <Link
              href='/turismo'
              className='group rounded-lg bg-white p-6 text-center shadow-md transition-all hover:shadow-lg'
            >
              <MapPin className='mx-auto mb-4 h-12 w-12 text-primary-600 transition-transform group-hover:scale-110' />
              <h3 className='mb-2 text-lg font-semibold text-gray-900'>Turismo</h3>
              <p className='text-sm text-gray-600'>
                Descubre los atractivos turísticos de la región
              </p>
            </Link>

            <Link
              href='/gastronomia'
              className='group rounded-lg bg-white p-6 text-center shadow-md transition-all hover:shadow-lg'
            >
              <Utensils className='mx-auto mb-4 h-12 w-12 text-warm-600 transition-transform group-hover:scale-110' />
              <h3 className='mb-2 text-lg font-semibold text-gray-900'>Gastronomía</h3>
              <p className='text-sm text-gray-600'>
                Saborea los platos típicos y restaurantes locales
              </p>
            </Link>

            <Link
              href='/cultura'
              className='group rounded-lg bg-white p-6 text-center shadow-md transition-all hover:shadow-lg'
            >
              <Palette className='mx-auto mb-4 h-12 w-12 text-river-600 transition-transform group-hover:scale-110' />
              <h3 className='mb-2 text-lg font-semibold text-gray-900'>Cultura</h3>
              <p className='text-sm text-gray-600'>
                Conoce eventos, arte y tradiciones locales
              </p>
            </Link>

            <Link
              href='/economia'
              className='group rounded-lg bg-white p-6 text-center shadow-md transition-all hover:shadow-lg'
            >
              <TrendingUp className='mx-auto mb-4 h-12 w-12 text-primary-600 transition-transform group-hover:scale-110' />
              <h3 className='mb-2 text-lg font-semibold text-gray-900'>Economía</h3>
              <p className='text-sm text-gray-600'>
                Información comercial y empresarial
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Municipalities Section */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='mb-12 text-center'>
            <h2 className='mb-4 text-3xl font-bold text-gray-900'>Nuestros Municipios</h2>
            <p className='text-lg text-gray-600'>
              Explora la riqueza de cada municipio de Caldas
            </p>
          </div>
          <MunicipiosGrid municipios={municipios} />
        </div>
      </section>

      {/* Upcoming Events Preview */}
      {eventos.length > 0 && (
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='mb-12 text-center'>
              <h2 className='mb-4 text-3xl font-bold text-gray-900'>Próximos Eventos</h2>
              <p className='text-lg text-gray-600'>
                No te pierdas estos eventos culturales
              </p>
            </div>
            <EventsCalendar />
            <div className='mt-8 text-center'>
              <Link
                href='/cultura'
                className='inline-flex items-center space-x-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700'
              >
                <span>Ver todos los eventos</span>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
