import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight } from 'lucide-react'

export function MunicipioCard ({ municipio }) {
  return (
    <Link
      href={`/municipios/${municipio.slug}`}
      className='group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl'
    >
      <div className='relative h-48 w-full overflow-hidden'>
        <Image
          src={municipio.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'}
          alt={municipio.nombre}
          fill
          className='object-cover transition-transform duration-300 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent' />
        <div className='absolute bottom-4 left-4 right-4'>
          <h3 className='text-xl font-bold text-white'>{municipio.nombre}</h3>
          <p className='text-sm text-white/90'>{municipio.departamento}</p>
        </div>
      </div>
      <div className='p-6'>
        <p className='mb-4 line-clamp-3 text-sm text-gray-600'>{municipio.descripcion}</p>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2 text-sm text-gray-500'>
            <MapPin className='h-4 w-4' />
            <span>{municipio.altitud} m.s.n.m.</span>
          </div>
          <div className='flex items-center space-x-1 text-primary-600 group-hover:text-primary-700'>
            <span className='text-sm font-medium'>Explorar</span>
            <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
          </div>
        </div>
      </div>
    </Link>
  )
}
