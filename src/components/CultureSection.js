import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'

export function CultureSection ({ items, municipio }) {
  if (!items || items.length === 0) {
    return (
      <div className='py-12 text-center'>
        <p className='text-gray-500'>No hay eventos culturales disponibles.</p>
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
              src={item.imagen || 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800'}
              alt={item.nombre}
              fill
              className='object-cover transition-transform duration-300 group-hover:scale-110'
            />
            <div className='absolute top-4 right-4'>
              <span className='rounded-full bg-white/90 px-3 py-1 text-xs font-semibold capitalize text-gray-900'>
                {item.tipo}
              </span>
            </div>
          </div>
          <div className='p-6'>
            <h3 className='mb-2 text-xl font-bold text-gray-900'>{item.nombre}</h3>
            <div className='mb-3 flex items-center space-x-2 text-sm text-gray-600'>
              <Calendar className='h-4 w-4' />
              <span>{formatDate(item.fecha)}</span>
            </div>
            <p className='mb-4 line-clamp-3 text-sm text-gray-600'>{item.descripcion}</p>
            {item.actividades && item.actividades.length > 0 && (
              <div className='mb-4'>
                <p className='mb-2 text-xs font-semibold uppercase text-gray-500'>Actividades:</p>
                <div className='flex flex-wrap gap-2'>
                  {item.actividades.slice(0, 3).map((actividad, index) => (
                    <span
                      key={index}
                      className='rounded-full bg-river-100 px-2 py-1 text-xs text-river-700'
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
