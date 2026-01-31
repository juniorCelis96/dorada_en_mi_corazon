export const municipiosData = [
  {
    slug: 'la-dorada',
    nombre: 'La Dorada',
    departamento: 'Caldas',
    altitud: 176,
    temperatura: '28°C',
    poblacion: '85000',
    descripcion: 'La Dorada es un municipio estratégico ubicado a orillas del río Magdalena, conocido como la puerta de entrada al Magdalena Medio. Su ubicación privilegiada la convierte en un importante centro comercial y turístico.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    coordenadas: {
      lat: 5.4542,
      lng: -74.6647
    },
    caracteristicas: [
      'Puerto fluvial sobre el río Magdalena',
      'Clima cálido tropical',
      'Centro comercial regional',
      'Rica biodiversidad'
    ]
  },
  {
    slug: 'norcasia',
    nombre: 'Norcasia',
    departamento: 'Caldas',
    altitud: 850,
    temperatura: '24°C',
    poblacion: '12000',
    descripcion: 'Norcasia es un municipio rodeado de montañas y naturaleza, ideal para el ecoturismo y la aventura. Sus paisajes montañosos y su rica fauna lo convierten en un destino único.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
    coordenadas: {
      lat: 5.5750,
      lng: -74.8894
    },
    caracteristicas: [
      'Ecoturismo y aventura',
      'Paisajes montañosos',
      'Rica biodiversidad',
      'Tradición minera'
    ]
  },
  {
    slug: 'victoria',
    nombre: 'Victoria',
    departamento: 'Caldas',
    altitud: 950,
    temperatura: '23°C',
    poblacion: '15000',
    descripcion: 'Victoria es un municipio con una rica tradición cultural y agrícola. Sus paisajes cafeteros y su arquitectura tradicional reflejan la identidad de la región.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    coordenadas: {
      lat: 5.3167,
      lng: -74.9167
    },
    caracteristicas: [
      'Tradición cafetera',
      'Arquitectura tradicional',
      'Cultura campesina',
      'Paisajes verdes'
    ]
  },
  {
    slug: 'samana',
    nombre: 'Samaná',
    departamento: 'Caldas',
    altitud: 1200,
    temperatura: '20°C',
    poblacion: '25000',
    descripcion: 'Samaná es conocido por sus paisajes montañosos, sus ríos cristalinos y su rica biodiversidad. Es un destino ideal para el turismo de naturaleza y aventura.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
    coordenadas: {
      lat: 5.4167,
      lng: -75.0000
    },
    caracteristicas: [
      'Ríos cristalinos',
      'Turismo de aventura',
      'Biodiversidad',
      'Paisajes montañosos'
    ]
  }
]

export function getMunicipioBySlug (slug) {
  return municipiosData.find(m => m.slug === slug)
}

export function getAllMunicipios () {
  return municipiosData
}
