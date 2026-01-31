'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertCircle, Home } from 'lucide-react'

export default function Error ({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50'>
      <div className='text-center'>
        <AlertCircle className='mx-auto mb-4 h-16 w-16 text-red-600' />
        <h1 className='mb-4 text-3xl font-bold text-gray-900'>Algo salió mal</h1>
        <p className='mb-8 text-gray-600'>
          Ocurrió un error inesperado. Por favor, intenta nuevamente.
        </p>
        <div className='flex justify-center space-x-4'>
          <button
            onClick={reset}
            className='inline-flex items-center space-x-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700'
          >
            <span>Intentar de nuevo</span>
          </button>
          <Link
            href='/'
            className='inline-flex items-center space-x-2 rounded-lg border-2 border-primary-600 px-6 py-3 font-semibold text-primary-600 transition-colors hover:bg-primary-50'
          >
            <Home className='h-5 w-5' />
            <span>Ir al inicio</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
