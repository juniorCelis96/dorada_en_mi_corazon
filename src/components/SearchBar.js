'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { useStore } from '@/lib/store'

export function SearchBar ({ onSearch }) {
  const { searchQuery, setSearchQuery } = useStore()
  const [localQuery, setLocalQuery] = useState(searchQuery)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchQuery(localQuery)
    if (onSearch) {
      onSearch(localQuery)
    }
  }

  const handleClear = () => {
    setLocalQuery('')
    setSearchQuery('')
    if (onSearch) {
      onSearch('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='relative w-full max-w-2xl'>
      <div className='relative'>
        <Search className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
        <input
          type='text'
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder='Buscar atractivos, restaurantes, eventos...'
          className='w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-10 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500'
        />
        {localQuery && (
          <button
            type='button'
            onClick={handleClear}
            className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
          >
            <X className='h-5 w-5' />
          </button>
        )}
      </div>
    </form>
  )
}
