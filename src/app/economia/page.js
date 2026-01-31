'use client'

import { useState, useMemo } from 'react'
import { SearchBar } from '@/components/SearchBar'
import { FilterPanel } from '@/components/FilterPanel'
import { getAllEconomy } from '@/data/economyData'
import { useStore } from '@/lib/store'
import { TrendingUp, Building2 } from 'lucide-react'

export default function EconomiaPage () {
  const { searchQuery, activeFilters } = useStore()
  const allEconomy = getAllEconomy()

  const categories = [...new Set(allEconomy.map(item => item.sector))]

  const filteredItems = useMemo(() => {
    let filtered = allEconomy

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        item =>
          item.nombre.toLowerCase().includes(query) ||
          item.descripcion.toLowerCase().includes(query) ||
          item.municipio.toLowerCase().includes(query) ||
          item.sector.toLowerCase().includes(query)
      )
    }

    if (activeFilters.categoria) {
      filtered = filtered.filter(item => item.sector === activeFilters.categoria)
    }

    if (activeFilters.municipio) {
      filtered = filtered.filter(item => item.municipio === activeFilters.municipio)
    }

    return filtered
  }, [allEconomy, searchQuery, activeFilters])

  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'>
          <h1 className='mb-4 text-4xl font-bold text-gray-900'>Economía y Comercio</h1>
          <p className='text-lg text-gray-600'>
            Información sobre el sector económico y comercial de la región
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

        {filteredItems.length > 0 ? (
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className='group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl'
              >
                <div className='relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary-100 to-river-100'>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <TrendingUp className='h-16 w-16 text-primary-600 opacity-50' />
                  </div>
                </div>
                <div className='p-6'>
                  <div className='mb-2 flex items-center space-x-2'>
                    <Building2 className='h-5 w-5 text-primary-600' />
                    <h3 className='text-xl font-bold text-gray-900'>{item.nombre}</h3>
                  </div>
                  <p className='mb-4 text-sm text-gray-600'>{item.descripcion}</p>
                  <div className='mb-4'>
                    <span className='inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 capitalize'>
                      {item.sector}
                    </span>
                  </div>
                  {item.empresas && item.empresas.length > 0 && (
                    <div className='border-t pt-4'>
                      {item.empresas.map((empresa, index) => (
                        <div key={index} className='text-sm'>
                          <p className='font-semibold text-gray-900'>{empresa.nombre}</p>
                          <p className='text-gray-600'>{empresa.tipo}</p>
                          {empresa.contacto && (
                            <p className='text-gray-500'>{empresa.contacto}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='py-12 text-center'>
            <p className='text-gray-500'>No se encontraron resultados para tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  )
}
