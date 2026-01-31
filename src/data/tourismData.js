export const tourismData = [
  {
    id: 1,
    nombre: 'Río Magdalena',
    municipio: 'la-dorada',
    categoria: 'naturaleza',
    descripcion: 'El río Magdalena es el principal río de Colombia y ofrece múltiples actividades como navegación, pesca deportiva y observación de aves.',
    imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    coordenadas: { lat: 5.4542, lng: -74.6647 },
    actividades: ['Navegación fluvial', 'Pesca deportiva', 'Observación de aves', 'Fotografía']
  },
  {
    id: 2,
    nombre: 'Puerto Fluvial La Dorada',
    municipio: 'la-dorada',
    categoria: 'cultura',
    descripcion: 'Importante puerto fluvial histórico que conecta la región con el resto del país a través del río Magdalena.',
    imagen: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
    coordenadas: { lat: 5.4542, lng: -74.6647 },
    actividades: ['Visitas guiadas', 'Fotografía histórica', 'Aprendizaje cultural']
  },
  {
    id: 3,
    nombre: 'Cascadas de Norcasia',
    municipio: 'norcasia',
    categoria: 'naturaleza',
    descripcion: 'Hermosas cascadas naturales rodeadas de vegetación exuberante, ideales para el ecoturismo y la fotografía.',
    imagen: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
    coordenadas: { lat: 5.5750, lng: -74.8894 },
    actividades: ['Senderismo', 'Fotografía', 'Baño en cascadas', 'Observación de flora']
  },
  {
    id: 4,
    nombre: 'Mirador de Victoria',
    municipio: 'victoria',
    categoria: 'naturaleza',
    descripcion: 'Mirador natural con vistas panorámicas de los paisajes cafeteros y montañosos de la región.',
    imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    coordenadas: { lat: 5.3167, lng: -74.9167 },
    actividades: ['Fotografía', 'Observación de paisajes', 'Picnic', 'Relajación']
  },
  {
    id: 5,
    nombre: 'Río Samaná',
    municipio: 'samana',
    categoria: 'aventura',
    descripcion: 'Río cristalino perfecto para actividades acuáticas como rafting, kayak y natación.',
    imagen: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
    coordenadas: { lat: 5.4167, lng: -75.0000 },
    actividades: ['Rafting', 'Kayak', 'Natación', 'Tubing']
  },
  {
    id: 6,
    nombre: 'Parque Natural Regional',
    municipio: 'samana',
    categoria: 'naturaleza',
    descripcion: 'Área protegida con gran biodiversidad, senderos ecológicos y oportunidades para avistamiento de fauna silvestre.',
    imagen: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
    coordenadas: { lat: 5.4167, lng: -75.0000 },
    actividades: ['Senderismo', 'Avistamiento de fauna', 'Fotografía', 'Educación ambiental']
  }
]

export function getTourismByMunicipio (municipioSlug) {
  return tourismData.filter(t => t.municipio === municipioSlug)
}

export function getTourismByCategory (categoria) {
  return tourismData.filter(t => t.categoria === categoria)
}

export function getAllTourism () {
  return tourismData
}
