import { MunicipioCard } from './MunicipioCard'

export function MunicipiosGrid ({ municipios }) {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {municipios.map((municipio) => (
        <MunicipioCard key={municipio.slug} municipio={municipio} />
      ))}
    </div>
  )
}
