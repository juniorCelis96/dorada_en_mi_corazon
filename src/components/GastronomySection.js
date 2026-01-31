import Image from 'next/image'
import Link from 'next/link'
import { UtensilsCrossed, MapPin, Phone } from 'lucide-react'

export function GastronomySection ({ items, municipio }) {
  if (!items || items.length === 0) {
    return (
      <div className='py-12 text-center'>
        <p className='text-gray-500'>No hay información gastronómica disponible.</p>
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
              src={item.imagen || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800'}
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
            <div className='mb-2 flex items-center space-x-2'>
              <UtensilsCrossed className='h-5 w-5 text-primary-600' />
              <h3 className='text-xl font-bold text-gray-900'>{item.nombre}</h3>
            </div>
            <p className='mb-4 line-clamp-3 text-sm text-gray-600'>{item.descripcion}</p>
            {item.ingredientes && item.ingredientes.length > 0 && (
              <div className='mb-4'>
                <p className='mb-2 text-xs font-semibold uppercase text-gray-500'>Ingredientes:</p>
                <div className='flex flex-wrap gap-2'>
                  {item.ingredientes.slice(0, 4).map((ingrediente, index) => (
                    <span
                      key={index}
                      className='rounded-full bg-warm-100 px-2 py-1 text-xs text-warm-700'
                    >
                      {ingrediente}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {item.restaurantes && item.restaurantes.length > 0 && (
              <div className='space-y-2 border-t pt-4'>
                {item.restaurantes.map((restaurante, index) => (
                  <div key={index} className='text-sm'>
                    <p className='font-semibold text-gray-900'>{restaurante.nombre}</p>
                    <div className='flex items-center space-x-1 text-gray-600'>
                      <MapPin className='h-3 w-3' />
                      <span className='text-xs'>{restaurante.direccion}</span>
                    </div>
                    {restaurante.telefono && (
                      <div className='flex items-center space-x-1 text-gray-600'>
                        <Phone className='h-3 w-3' />
                        <span className='text-xs'>{restaurante.telefono}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
