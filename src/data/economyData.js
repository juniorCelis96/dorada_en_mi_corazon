export const economyData = [
  {
    id: 1,
    nombre: 'Comercio Fluvial',
    municipio: 'la-dorada',
    sector: 'comercio',
    descripcion: 'La Dorada es un importante centro de comercio fluvial gracias a su puerto sobre el río Magdalena, facilitando el intercambio comercial regional.',
    imagen: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    empresas: [
      {
        nombre: 'Transportes Fluviales del Magdalena',
        tipo: 'Transporte',
        contacto: '+57 300 123 4567'
      }
    ]
  },
  {
    id: 2,
    nombre: 'Agricultura y Ganadería',
    municipio: 'victoria',
    sector: 'agropecuario',
    descripcion: 'Sector agropecuario tradicional con producción de café, plátano, ganado y otros productos agrícolas.',
    imagen: 'https://images.unsplash.com/photo-1500937386664-56d1dfefc4db?w=800',
    empresas: [
      {
        nombre: 'Cooperativa de Caficultores',
        tipo: 'Agricultura',
        contacto: '+57 300 234 5678'
      }
    ]
  },
  {
    id: 3,
    nombre: 'Turismo de Aventura',
    municipio: 'samana',
    sector: 'turismo',
    descripcion: 'Desarrollo del sector turístico enfocado en actividades de aventura y ecoturismo.',
    imagen: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
    empresas: [
      {
        nombre: 'Aventura Samaná',
        tipo: 'Turismo',
        contacto: '+57 300 345 6789'
      }
    ]
  },
  {
    id: 4,
    nombre: 'Minería Responsable',
    municipio: 'norcasia',
    sector: 'mineria',
    descripcion: 'Actividades mineras desarrolladas con enfoque en sostenibilidad y responsabilidad ambiental.',
    imagen: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
    empresas: [
      {
        nombre: 'Minería Sostenible Norcasia',
        tipo: 'Minería',
        contacto: '+57 300 456 7890'
      }
    ]
  },
  {
    id: 5,
    nombre: 'Comercio Local',
    municipio: 'la-dorada',
    sector: 'comercio',
    descripcion: 'Vibrante sector comercial con tiendas, mercados y establecimientos que atienden a la población local y visitantes.',
    imagen: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    empresas: [
      {
        nombre: 'Centro Comercial La Dorada',
        tipo: 'Comercio',
        contacto: '+57 300 567 8901'
      }
    ]
  }
]

export function getEconomyByMunicipio (municipioSlug) {
  return economyData.filter(e => e.municipio === municipioSlug)
}

export function getEconomyBySector (sector) {
  return economyData.filter(e => e.sector === sector)
}

export function getAllEconomy () {
  return economyData
}
