import { create } from 'zustand'

export const useStore = create((set) => ({
  selectedMunicipio: null,
  searchQuery: '',
  activeFilters: {
    categoria: null,
    municipio: null
  },
  setSelectedMunicipio: (municipio) => set({ selectedMunicipio: municipio }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setActiveFilters: (filters) => set({ activeFilters: filters }),
  resetFilters: () => set({
    searchQuery: '',
    activeFilters: { categoria: null, municipio: null }
  })
}))
