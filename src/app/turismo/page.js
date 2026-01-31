'use client'

import { useMemo } from 'react'
import { TourismSection } from '@/components/TourismSection'
import { SearchBar } from '@/components/SearchBar'
import { FilterPanel } from '@/components/FilterPanel'
import { getAllTourism } from '@/data/tourismData'
import { useStore } from '@/lib/store'

export default function TurismoPage () {
  const { searchQuery, activeFilters } = useStore()
  const allTourism = getAllTourism()

  const categories = [...new Set(allTourism.map(item => item.categoria))]

  const filteredItems = useMemo(() => {
    let filtered = allTourism

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        item =>
          item.nombre.toLowerCase().includes(query) ||
          item.descripcion.toLowerCase().includes(query) ||
          item.municipio.toLowerCase().includes(query)
      )
    }

    if (activeFilters.categoria) {
      filtered = filtered.filter(item => item.categoria === activeFilters.categoria)
    }

    if (activeFilters.municipio) {
      filtered = filtered.filter(item => item.municipio === activeFilters.municipio)
    }

    return filtered
  }, [allTourism, searchQuery, activeFilters])

  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'>
          <h1 className='mb-4 text-4xl font-bold text-gray-900'>Atractivos Turísticos</h1>
          <p className='text-lg text-gray-600'>
            Descubre los lugares más hermosos e interesantes de la región
          </p>
        </div>

        <div className='mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <div className='flex-1'>
            <SearchBar />
          </div>
          <div className='md:w-64'>
            <FilterPanel categories={categories} />
          </div>
        </div>

        {filteredItems.length > 0
          ? (
              <TourismSection items={filteredItems} />
            )
          : (
              <div className='py-12 text-center'>
                <p className='text-gray-500'>No se encontraron resultados para tu búsqueda.</p>
              </div>
            )}
      </div>
    </div>
  )
}
