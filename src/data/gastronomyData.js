export const gastronomyData = [
  {
    id: 1,
    nombre: 'Pescado Frito del Magdalena',
    municipio: 'la-dorada',
    tipo: 'plato-tipico',
    descripcion: 'Pescado fresco del río Magdalena preparado frito, acompañado de patacones, arroz y ensalada. Delicia culinaria de la región.',
    imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
    restaurantes: [
      {
        nombre: 'Restaurante El Puerto',
        direccion: 'Calle Principal, La Dorada',
        telefono: '+57 300 123 4567'
      }
    ],
    ingredientes: ['Pescado fresco', 'Plátano', 'Arroz', 'Ensalada', 'Limón']
  },
  {
    id: 2,
    nombre: 'Sancocho de Gallina',
    municipio: 'la-dorada',
    tipo: 'plato-tipico',
    descripcion: 'Sopa tradicional colombiana preparada con gallina criolla, plátano, yuca y otros ingredientes locales.',
    imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
    restaurantes: [
      {
        nombre: 'Doña María',
        direccion: 'Carrera 5, La Dorada',
        telefono: '+57 300 234 5678'
      }
    ],
    ingredientes: ['Gallina criolla', 'Plátano', 'Yuca', 'Mazorca', 'Cilantro']
  },
  {
    id: 3,
    nombre: 'Café de Altura',
    municipio: 'victoria',
    tipo: 'bebida',
    descripcion: 'Café cultivado en las montañas de Victoria, conocido por su sabor suave y aroma característico.',
    imagen: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800',
    restaurantes: [
      {
        nombre: 'Cafetería La Montaña',
        direccion: 'Plaza Principal, Victoria',
        telefono: '+57 300 345 6789'
      }
    ],
    ingredientes: ['Café arábica', 'Agua', 'Azúcar']
  },
  {
    id: 4,
    nombre: 'Arepas de Chócolo',
    municipio: 'norcasia',
    tipo: 'plato-tipico',
    descripcion: 'Arepas preparadas con maíz chócolo (maíz tierno), típicas de la región montañosa.',
    imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
    restaurantes: [
      {
        nombre: 'Fonda La Tradición',
        direccion: 'Vía Principal, Norcasia',
        telefono: '+57 300 456 7890'
      }
    ],
    ingredientes: ['Maíz chócolo', 'Queso', 'Mantequilla']
  },
  {
    id: 5,
    nombre: 'Trucha al Ajillo',
    municipio: 'samana',
    tipo: 'plato-tipico',
    descripcion: 'Trucha fresca de los ríos de Samaná preparada al ajillo, acompañada de patacones y ensalada.',
    imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
    restaurantes: [
      {
        nombre: 'Restaurante El Río',
        direccion: 'Calle del Río, Samaná',
        telefono: '+57 300 567 8901'
      }
    ],
    ingredientes: ['Trucha', 'Ajo', 'Mantequilla', 'Limón', 'Hierbas']
  }
]

export function getGastronomyByMunicipio (municipioSlug) {
  return gastronomyData.filter(g => g.municipio === municipioSlug)
}

export function getGastronomyByType (tipo) {
  return gastronomyData.filter(g => g.tipo === tipo)
}

export function getAllGastronomy () {
  return gastronomyData
}
