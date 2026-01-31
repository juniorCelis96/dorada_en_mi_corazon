import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound () {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50'>
      <div className='text-center'>
        <h1 className='mb-4 text-6xl font-bold text-gray-900'>404</h1>
        <h2 className='mb-4 text-2xl font-semibold text-gray-700'>Página no encontrada</h2>
        <p className='mb-8 text-gray-600'>
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <div className='flex justify-center space-x-4'>
          <Link
            href='/'
            className='inline-flex items-center space-x-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700'
          >
            <Home className='h-5 w-5' />
            <span>Ir al inicio</span>
          </Link>
          <Link
            href='/municipios'
            className='inline-flex items-center space-x-2 rounded-lg border-2 border-primary-600 px-6 py-3 font-semibold text-primary-600 transition-colors hover:bg-primary-50'
          >
            <ArrowLeft className='h-5 w-5' />
            <span>Ver municipios</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
