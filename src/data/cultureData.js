export const cultureData = [
  {
    id: 1,
    nombre: 'Festival del Río Magdalena',
    municipio: 'la-dorada',
    tipo: 'festival',
    descripcion: 'Festival anual que celebra la importancia del río Magdalena con música, danza, gastronomía y actividades culturales.',
    fecha: '2026-07-15',
    imagen: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    actividades: ['Conciertos', 'Danza folclórica', 'Feria gastronómica', 'Regatas']
  },
  {
    id: 2,
    nombre: 'Feria Agropecuaria de Victoria',
    municipio: 'victoria',
    tipo: 'feria',
    descripcion: 'Feria que muestra la producción agrícola y pecuaria de la región, con exposición de productos locales y actividades culturales.',
    fecha: '2026-08-20',
    imagen: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    actividades: ['Exposición de productos', 'Concursos ganaderos', 'Música campesina', 'Gastronomía']
  },
  {
    id: 3,
    nombre: 'Festival de Aventura y Naturaleza',
    municipio: 'samana',
    tipo: 'festival',
    descripcion: 'Festival que promueve el turismo de aventura y la conservación del medio ambiente con actividades deportivas y culturales.',
    fecha: '2026-09-10',
    imagen: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    actividades: ['Competencias deportivas', 'Talleres ambientales', 'Conciertos', 'Senderismo guiado']
  },
  {
    id: 4,
    nombre: 'Semana Cultural de Norcasia',
    municipio: 'norcasia',
    tipo: 'evento-cultural',
    descripcion: 'Semana dedicada a la promoción de las tradiciones culturales locales con presentaciones artísticas, talleres y exposiciones.',
    fecha: '2026-10-05',
    imagen: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    actividades: ['Teatro', 'Música tradicional', 'Artesanías', 'Talleres culturales']
  },
  {
    id: 5,
    nombre: 'Día del Campesino',
    municipio: 'victoria',
    tipo: 'celebracion',
    descripcion: 'Celebración que rinde homenaje a los campesinos de la región con actividades culturales, gastronomía y música.',
    fecha: '2026-06-15',
    imagen: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    actividades: ['Desfile', 'Música campesina', 'Gastronomía tradicional', 'Concursos']
  }
]

export function getCultureByMunicipio (municipioSlug) {
  return cultureData.filter(c => c.municipio === municipioSlug)
}

export function getCultureByType (tipo) {
  return cultureData.filter(c => c.tipo === tipo)
}

export function getUpcomingEvents () {
  const today = new Date()
  return cultureData
    .filter(event => new Date(event.fecha) >= today)
    .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
}

export function getAllCulture () {
  return cultureData
}
