import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getMunicipioBySlug, getAllMunicipios } from '@/data/municipiosData'
import { getTourismByMunicipio } from '@/data/tourismData'
import { getGastronomyByMunicipio } from '@/data/gastronomyData'
import { getCultureByMunicipio } from '@/data/cultureData'
import { getEconomyByMunicipio } from '@/data/economyData'
import { TourismSection } from '@/components/TourismSection'
import { GastronomySection } from '@/components/GastronomySection'
import { CultureSection } from '@/components/CultureSection'
import { MapPin, Thermometer, Users, ArrowLeft } from 'lucide-react'

export async function generateStaticParams () {
  const municipios = getAllMunicipios()
  return municipios.map((municipio) => ({
    slug: municipio.slug
  }))
}

export async function generateMetadata ({ params }) {
  const { slug } = await params
  const municipio = getMunicipioBySlug(slug)
  if (!municipio) {
    return {
      title: 'Municipio no encontrado'
    }
  }
  return {
    title: `${municipio.nombre} - Senderos sin límites`,
    description: municipio.descripcion
  }
}

export default async function MunicipioPage ({ params }) {
  const { slug } = await params
  const municipio = getMunicipioBySlug(slug)

  if (!municipio) {
    notFound()
  }

  const turismo = getTourismByMunicipio(slug)
  const gastronomia = getGastronomyByMunicipio(slug)
  const cultura = getCultureByMunicipio(slug)
  const economia = getEconomyByMunicipio(slug)

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='relative h-96 overflow-hidden'>
        <Image
          src={municipio.image}
          alt={municipio.nombre}
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
        <div className='relative z-10 flex h-full items-end'>
          <div className='container mx-auto px-4 pb-12'>
            <Link
              href='/municipios'
              className='mb-4 inline-flex items-center space-x-2 text-white hover:text-gray-200'
            >
              <ArrowLeft className='h-5 w-5' />
              <span>Volver a municipios</span>
            </Link>
            <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
              {municipio.nombre}
            </h1>
            <p className='max-w-2xl text-lg text-white/90'>{municipio.descripcion}</p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className='border-b bg-gray-50 py-8'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
            <div className='rounded-lg bg-white p-4 text-center shadow-sm'>
              <MapPin className='mx-auto mb-2 h-6 w-6 text-primary-600' />
              <p className='text-sm text-gray-600'>Altitud</p>
              <p className='text-lg font-semibold text-gray-900'>{municipio.altitud} m.s.n.m.</p>
            </div>
            <div className='rounded-lg bg-white p-4 text-center shadow-sm'>
              <Thermometer className='mx-auto mb-2 h-6 w-6 text-warm-600' />
              <p className='text-sm text-gray-600'>Temperatura</p>
              <p className='text-lg font-semibold text-gray-900'>{municipio.temperatura}</p>
            </div>
            <div className='rounded-lg bg-white p-4 text-center shadow-sm'>
              <Users className='mx-auto mb-2 h-6 w-6 text-river-600' />
              <p className='text-sm text-gray-600'>Población</p>
              <p className='text-lg font-semibold text-gray-900'>{municipio.poblacion}</p>
            </div>
            <div className='rounded-lg bg-white p-4 text-center shadow-sm'>
              <MapPin className='mx-auto mb-2 h-6 w-6 text-primary-600' />
              <p className='text-sm text-gray-600'>Departamento</p>
              <p className='text-lg font-semibold text-gray-900'>{municipio.departamento}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Characteristics */}
      {municipio.caracteristicas && municipio.caracteristicas.length > 0 && (
        <section className='py-12'>
          <div className='container mx-auto px-4'>
            <h2 className='mb-6 text-2xl font-bold text-gray-900'>Características</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
              {municipio.caracteristicas.map((caracteristica, index) => (
                <div
                  key={index}
                  className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm'
                >
                  <p className='text-gray-700'>{caracteristica}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tourism Section */}
      {turismo.length > 0 && (
        <section className='py-12 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <h2 className='mb-6 text-2xl font-bold text-gray-900'>Atractivos Turísticos</h2>
            <TourismSection items={turismo} municipio={slug} />
          </div>
        </section>
      )}

      {/* Gastronomy Section */}
      {gastronomia.length > 0 && (
        <section className='py-12'>
          <div className='container mx-auto px-4'>
            <h2 className='mb-6 text-2xl font-bold text-gray-900'>Gastronomía</h2>
            <GastronomySection items={gastronomia} municipio={slug} />
          </div>
        </section>
      )}

      {/* Culture Section */}
      {cultura.length > 0 && (
        <section className='py-12 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <h2 className='mb-6 text-2xl font-bold text-gray-900'>Cultura y Eventos</h2>
            <CultureSection items={cultura} municipio={slug} />
          </div>
        </section>
      )}

      {/* Economy Section */}
      {economia.length > 0 && (
        <section className='py-12'>
          <div className='container mx-auto px-4'>
            <h2 className='mb-6 text-2xl font-bold text-gray-900'>Economía</h2>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {economia.map((item) => (
                <div
                  key={item.id}
                  className='rounded-lg bg-white p-6 shadow-md'
                >
                  <h3 className='mb-2 text-xl font-bold text-gray-900'>{item.nombre}</h3>
                  <p className='mb-4 text-sm text-gray-600'>{item.descripcion}</p>
                  <span className='inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 capitalize'>
                    {item.sector}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
