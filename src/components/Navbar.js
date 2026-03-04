'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navbar () {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/municipios', label: 'Municipios' },
    { href: '/turismo', label: 'Turismo' },
    { href: '/gastronomia', label: 'Gastronomía' },
    { href: '/cultura', label: 'Cultura' },
    { href: '/economia', label: 'Economía' },
    { href: '/contacto', label: 'Contacto' }
  ]

  return (
    <nav className='sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          <Link href='/' className='flex items-center space-x-3'>
            <Image
              src='/logo-ssl.PNG'
              alt='Senderos sin límites'
              width={50}
              height={50}
              className='h-12 w-auto object-contain'
              style={{ backgroundColor: 'transparent' }}
              priority
            />
            <Image
              src='/logo-ssl-fuente.PNG'
              alt='Senderos sin límites'
              width={180}
              height={35}
              className='h-9 w-auto object-contain'
              style={{ backgroundColor: 'transparent' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex md:items-center md:space-x-6'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='text-sm font-medium text-gray-700 transition-colors hover:text-primary-600'
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
          >
            {isOpen
              ? (
                  <X className='h-6 w-6 text-gray-700' />
                )
              : (
                  <Menu className='h-6 w-6 text-gray-700' />
                )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600'
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
