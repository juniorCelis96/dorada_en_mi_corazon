'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, Mail, User, MessageSquare } from 'lucide-react'
import { useState } from 'react'

const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  asunto: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres')
})

export function ContactForm () {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simular envío de formulario
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      <div>
        <label htmlFor='nombre' className='mb-2 block text-sm font-medium text-gray-700'>
          <User className='mr-2 inline h-4 w-4' />
          Nombre
        </label>
        <input
          id='nombre'
          type='text'
          {...register('nombre')}
          className='w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500'
        />
        {errors.nombre && (
          <p className='mt-1 text-sm text-red-600'>{errors.nombre.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='email' className='mb-2 block text-sm font-medium text-gray-700'>
          <Mail className='mr-2 inline h-4 w-4' />
          Email
        </label>
        <input
          id='email'
          type='email'
          {...register('email')}
          className='w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500'
        />
        {errors.email && (
          <p className='mt-1 text-sm text-red-600'>{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='asunto' className='mb-2 block text-sm font-medium text-gray-700'>
          Asunto
        </label>
        <input
          id='asunto'
          type='text'
          {...register('asunto')}
          className='w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500'
        />
        {errors.asunto && (
          <p className='mt-1 text-sm text-red-600'>{errors.asunto.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='mensaje' className='mb-2 block text-sm font-medium text-gray-700'>
          <MessageSquare className='mr-2 inline h-4 w-4' />
          Mensaje
        </label>
        <textarea
          id='mensaje'
          rows={6}
          {...register('mensaje')}
          className='w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500'
        />
        {errors.mensaje && (
          <p className='mt-1 text-sm text-red-600'>{errors.mensaje.message}</p>
        )}
      </div>

      {submitStatus === 'success' && (
        <div className='rounded-lg bg-green-50 p-4 text-green-800'>
          ¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className='rounded-lg bg-red-50 p-4 text-red-800'>
          Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
        </div>
      )}

      <button
        type='submit'
        disabled={isSubmitting}
        className='inline-flex items-center space-x-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700 disabled:opacity-50'
      >
        <Send className='h-5 w-5' />
        <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}</span>
      </button>
    </form>
  )
}
