import { ContactForm } from '@/components/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contacto - Senderos sin límites',
  description: 'Contáctanos para más información sobre turismo, gastronomía, cultura y economía de Caldas'
}

export default function ContactoPage () {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'>
          <h1 className='mb-4 text-4xl font-bold text-gray-900'>Contáctanos</h1>
          <p className='text-lg text-gray-600'>
            ¿Tienes preguntas o sugerencias? Estamos aquí para ayudarte
          </p>
        </div>

        <div className='mx-auto max-w-4xl'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
            {/* Contact Form */}
            <div className='rounded-lg bg-white p-8 shadow-md'>
              <h2 className='mb-6 text-2xl font-bold text-gray-900'>Envíanos un Mensaje</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className='space-y-6'>
              <div className='rounded-lg bg-white p-8 shadow-md'>
                <h2 className='mb-6 text-2xl font-bold text-gray-900'>Información de Contacto</h2>
                <div className='space-y-4'>
                  <div className='flex items-start space-x-4'>
                    <Mail className='mt-1 h-5 w-5 text-primary-600' />
                    <div>
                      <h3 className='font-semibold text-gray-900'>Email</h3>
                      <a
                        href='mailto:contacto@senderossinlimites.com'
                        className='text-gray-600 hover:text-primary-600'
                      >
                        contacto@senderossinlimites.com
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <Phone className='mt-1 h-5 w-5 text-primary-600' />
                    <div>
                      <h3 className='font-semibold text-gray-900'>Teléfono</h3>
                      <a href='tel:+573001234567' className='text-gray-600 hover:text-primary-600'>
                        +57 300 123 4567
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <MapPin className='mt-1 h-5 w-5 text-primary-600' />
                    <div>
                      <h3 className='font-semibold text-gray-900'>Ubicación</h3>
                      <p className='text-gray-600'>
                        Caldas, Colombia
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <Clock className='mt-1 h-5 w-5 text-primary-600' />
                    <div>
                      <h3 className='font-semibold text-gray-900'>Horario de Atención</h3>
                      <p className='text-gray-600'>
                        Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                        Sábados: 9:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='rounded-lg bg-gradient-to-br from-primary-600 to-river-600 p-8 text-white'>
                <h3 className='mb-4 text-xl font-bold'>¿Eres una empresa local?</h3>
                <p className='mb-4 text-white/90'>
                  Si tienes un negocio, restaurante o servicio turístico en la región, contáctanos para ser parte de nuestra plataforma.
                </p>
                <a
                  href='mailto:empresas@senderossinlimites.com'
                  className='inline-block rounded-lg bg-white px-6 py-2 font-semibold text-primary-600 transition-colors hover:bg-gray-100'
                >
                  Contactar para Empresas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
