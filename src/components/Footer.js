import Link from 'next/link'
import { MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer () {
  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          {/* About */}
          <div>
            <h3 className='mb-4 text-lg font-semibold text-white'>Senderos sin límites</h3>
            <p className='text-sm'>
              Plataforma de promoción turística, gastronómica, cultural y económica de los municipios de Caldas, Colombia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='mb-4 text-sm font-semibold text-white'>Enlaces Rápidos</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/municipios' className='hover:text-primary-400'>
                  Municipios
                </Link>
              </li>
              <li>
                <Link href='/turismo' className='hover:text-primary-400'>
                  Turismo
                </Link>
              </li>
              <li>
                <Link href='/gastronomia' className='hover:text-primary-400'>
                  Gastronomía
                </Link>
              </li>
              <li>
                <Link href='/cultura' className='hover:text-primary-400'>
                  Cultura
                </Link>
              </li>
            </ul>
          </div>

          {/* Municipalities */}
          <div>
            <h4 className='mb-4 text-sm font-semibold text-white'>Municipios</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/municipios/la-dorada' className='hover:text-primary-400'>
                  La Dorada
                </Link>
              </li>
              <li>
                <Link href='/municipios/norcasia' className='hover:text-primary-400'>
                  Norcasia
                </Link>
              </li>
              <li>
                <Link href='/municipios/victoria' className='hover:text-primary-400'>
                  Victoria
                </Link>
              </li>
              <li>
                <Link href='/municipios/samana' className='hover:text-primary-400'>
                  Samaná
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='mb-4 text-sm font-semibold text-white'>Contacto</h4>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-center space-x-2'>
                <Mail className='h-4 w-4' />
                <a href='mailto:contacto@senderossinlimites.com' className='hover:text-primary-400'>
                  contacto@senderossinlimites.com
                </a>
              </li>
              <li className='flex items-center space-x-2'>
                <MapPin className='h-4 w-4' />
                <span>Caldas, Colombia</span>
              </li>
            </ul>
            <div className='mt-4 flex space-x-4'>
              <a href='#' className='hover:text-primary-400' aria-label='Facebook'>
                <Facebook className='h-5 w-5' />
              </a>
              <a href='#' className='hover:text-primary-400' aria-label='Instagram'>
                <Instagram className='h-5 w-5' />
              </a>
              <a href='#' className='hover:text-primary-400' aria-label='Twitter'>
                <Twitter className='h-5 w-5' />
              </a>
            </div>
          </div>
        </div>

        <div className='mt-8 border-t border-gray-800 pt-8 text-center text-sm'>
          <p>&copy; {new Date().getFullYear()} Senderos sin límites. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
