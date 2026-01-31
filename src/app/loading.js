export default function Loading () {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='text-center'>
        <div className='mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent' />
        <p className='text-gray-600'>Cargando...</p>
      </div>
    </div>
  )
}
