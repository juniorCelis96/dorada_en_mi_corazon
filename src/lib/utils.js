import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn (...inputs) {
  return twMerge(clsx(inputs))
}

export function slugify (text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}

export function formatDate (date) {
  return new Date(date).toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
