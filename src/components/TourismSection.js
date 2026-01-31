import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

export function TourismSection ({ items, municipio }) {
  if (!items || items.length === 0) {
    return (
      <div className='py-12 text-center'>
        <p className='text-gray-500'>No hay atractivos turísticos disponibles.</p>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {items.map((item) => (
        <div
          key={item.id}
          className='group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl'
        >
          <div className='relative h-48 w-full overflow-hidden'>
            <Image
              src={item.imagen || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'}
              alt={item.nombre}
              fill
              className='object-cover transition-transform duration-300 group-hover:scale-110'
            />
            <div className='absolute top-4 right-4'>
              <span className='rounded-full bg-white/90 px-3 py-1 text-xs font-semibold capitalize text-gray-900'>
                {item.categoria}
              </span>
            </div>
          </div>
          <div className='p-6'>
            <h3 className='mb-2 text-xl font-bold text-gray-900'>{item.nombre}</h3>
            <p className='mb-4 line-clamp-3 text-sm text-gray-600'>{item.descripcion}</p>
            {item.actividades && item.actividades.length > 0 && (
              <div className='mb-4'>
                <p className='mb-2 text-xs font-semibold uppercase text-gray-500'>Actividades:</p>
                <div className='flex flex-wrap gap-2'>
                  {item.actividades.slice(0, 3).map((actividad, index) => (
                    <span
                      key={index}
                      className='rounded-full bg-primary-100 px-2 py-1 text-xs text-primary-700'
                    >
                      {actividad}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <Link
              href={`/municipios/${item.municipio}`}
              className='inline-flex items-center space-x-2 text-sm font-medium text-primary-600 hover:text-primary-700'
            >
              <MapPin className='h-4 w-4' />
              <span>Ver municipio</span>
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
