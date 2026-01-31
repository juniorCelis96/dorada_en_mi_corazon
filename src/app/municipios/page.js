import { MunicipiosGrid } from '@/components/MunicipiosGrid'
import { getAllMunicipios } from '@/data/municipiosData'

export const metadata = {
  title: 'Municipios - Senderos sin límites',
  description: 'Descubre todos los municipios de Caldas disponibles en nuestra plataforma'
}

export default function MunicipiosPage () {
  const municipios = getAllMunicipios()

  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'>
          <h1 className='mb-4 text-4xl font-bold text-gray-900'>Municipios de Caldas</h1>
          <p className='text-lg text-gray-600'>
            Explora la riqueza turística, gastronómica, cultural y económica de cada municipio
          </p>
        </div>
        <MunicipiosGrid municipios={municipios} />
      </div>
    </div>
  )
}
