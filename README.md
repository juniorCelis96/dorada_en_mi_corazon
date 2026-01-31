# Senderos sin límites

Plataforma web de promoción turística, gastronómica, cultural y económica de los municipios de Caldas, Colombia.

## ?? Tecnologías

- **Next.js 15** (App Router) con React 19
- **Tailwind CSS** para estilos utilitarios
- **Stylus** para CSS Modules (archivos .module.styl)
- **React Hook Form + Zod** para formularios y validación
- **Zustand** para estado global
- **Radix UI** y **Shadcn UI** para componentes base
- **Lucide React** para iconos

## ?? Requisitos Previos

- Node.js 18+ 
- npm o yarn

## ??? Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd senderos-sin-limites
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## ?? Estructura del Proyecto

```
src/
??? app/                    # Páginas y rutas (App Router)
?   ??? layout.js          # Layout principal
?   ??? page.js            # Página de inicio
?   ??? municipios/       # Páginas de municipios
?   ??? turismo/          # Página de turismo
?   ??? gastronomia/      # Página de gastronomía
?   ??? cultura/          # Página de cultura
?   ??? economia/         # Página de economía
?   ??? contacto/         # Página de contacto
??? components/            # Componentes React
?   ??? Navbar.js
?   ??? Footer.js
?   ??? Hero.js
?   ??? MunicipioCard.js
?   ??? TourismSection.js
?   ??? GastronomySection.js
?   ??? CultureSection.js
?   ??? ...
??? data/                  # Datos estáticos
?   ??? municipiosData.js
?   ??? tourismData.js
?   ??? gastronomyData.js
?   ??? cultureData.js
?   ??? economyData.js
??? lib/                   # Utilidades
    ??? utils.js
    ??? store.js
```

## ?? Convenciones del Proyecto

- **Estilo de código**: Standard.js (2 espacios, sin punto y coma, comillas simples)
- **Componentes**: Funcionales con named exports
- **Preferencia**: Server Components sobre Client Components cuando sea posible
- **Estilos**: Tailwind para utilidades comunes, Stylus modules para estilos complejos específicos del componente

## ?? Paleta de Colores

- **Primary (Verde)**: Colores relacionados con la naturaleza de la región
- **River (Azul)**: Inspirado en el río Magdalena
- **Warm (Naranja)**: Colores cálidos del clima tropical

## ?? Características

- ? Diseño responsive mobile-first
- ? Navegación clara y accesible
- ? Búsqueda y filtrado avanzado
- ? Galerías de imágenes optimizadas
- ? Formularios con validación
- ? SEO optimizado
- ? Rutas dinámicas para municipios

## ?? Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter (Standard.js)

## ?? Municipios Incluidos

- **La Dorada**: Puerto fluvial estratégico sobre el río Magdalena
- **Norcasia**: Ecoturismo y aventura en paisajes montañosos
- **Victoria**: Tradición cafetera y cultura campesina
- **Samaná**: Turismo de aventura y ríos cristalinos

## ?? Contribuir

Las contribuciones son bienvenidas. Por favor, asegúrate de seguir las convenciones del proyecto.

## ?? Licencia

Este proyecto es de código abierto.
