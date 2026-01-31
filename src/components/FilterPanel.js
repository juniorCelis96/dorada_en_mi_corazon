'use client'

import { useState } from 'react'
import { Filter, X } from 'lucide-react'
import { useStore } from '@/lib/store'
import { getAllMunicipios } from '@/data/municipiosData'

export function FilterPanel ({ categories, onFilterChange }) {
  const { activeFilters, setActiveFilters } = useStore()
  const [isOpen, setIsOpen] = useState(false)
  const municipios = getAllMunicipios()

  const handleCategoryChange = (category) => {
    const newFilters = {
      ...activeFilters,
      categoria: activeFilters.categoria === category ? null : category
    }
    setActiveFilters(newFilters)
    if (onFilterChange) {
      onFilterChange(newFilters)
    }
  }

  const handleMunicipioChange = (municipio) => {
    const newFilters = {
      ...activeFilters,
      municipio: activeFilters.municipio === municipio ? null : municipio
    }
    setActiveFilters(newFilters)
    if (onFilterChange) {
      onFilterChange(newFilters)
    }
  }

  const handleReset = () => {
    const resetFilters = { categoria: null, municipio: null }
    setActiveFilters(resetFilters)
    if (onFilterChange) {
      onFilterChange(resetFilters)
    }
  }

  return (
    <div className='relative'>
      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center space-x-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 md:hidden'
      >
        <Filter className='h-4 w-4' />
        <span>Filtros</span>
      </button>

      {/* Filter Panel */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute left-0 right-0 z-50 mt-2 rounded-lg border border-gray-200 bg-white p-4 shadow-lg md:relative md:block md:mt-0 md:shadow-none`}
      >
        <div className='mb-4 flex items-center justify-between md:hidden'>
          <h3 className='text-lg font-semibold'>Filtros</h3>
          <button onClick={() => setIsOpen(false)}>
            <X className='h-5 w-5' />
          </button>
        </div>

        {/* Categories */}
        {categories && categories.length > 0 && (
          <div className='mb-6'>
            <h4 className='mb-3 text-sm font-semibold text-gray-900'>Categorías</h4>
            <div className='space-y-2'>
              {categories.map((category) => (
                <label
                  key={category}
                  className='flex items-center space-x-2 cursor-pointer'
                >
                  <input
                    type='checkbox'
                    checked={activeFilters.categoria === category}
                    onChange={() => handleCategoryChange(category)}
                    className='h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500'
                  />
                  <span className='text-sm text-gray-700 capitalize'>{category}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Municipalities */}
        <div className='mb-6'>
          <h4 className='mb-3 text-sm font-semibold text-gray-900'>Municipios</h4>
          <div className='space-y-2'>
            {municipios.map((municipio) => (
              <label
                key={municipio.slug}
                className='flex items-center space-x-2 cursor-pointer'
              >
                <input
                  type='checkbox'
                  checked={activeFilters.municipio === municipio.slug}
                  onChange={() => handleMunicipioChange(municipio.slug)}
                  className='h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500'
                />
                <span className='text-sm text-gray-700'>{municipio.nombre}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Reset Button */}
        {(activeFilters.categoria || activeFilters.municipio) && (
          <button
            onClick={handleReset}
            className='w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
          >
            Limpiar Filtros
          </button>
        )}
      </div>
    </div>
  )
}
