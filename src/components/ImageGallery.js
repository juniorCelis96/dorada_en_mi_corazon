'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export function ImageGallery ({ images, title }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index) => {
    setSelectedImage(images[index])
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const next = (currentIndex + 1) % images.length
    setCurrentIndex(next)
    setSelectedImage(images[next])
  }

  const prevImage = () => {
    const prev = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(prev)
    setSelectedImage(images[prev])
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <>
      <div className='grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4'>
        {images.map((image, index) => (
          <div
            key={index}
            className='relative aspect-square cursor-pointer overflow-hidden rounded-lg'
            onClick={() => openModal(index)}
          >
            <Image
              src={image}
              alt={`${title} - Imagen ${index + 1}`}
              fill
              className='object-cover transition-transform duration-300 hover:scale-110'
              sizes='(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw'
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4'
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className='absolute right-4 top-4 text-white hover:text-gray-300'
          >
            <X className='h-8 w-8' />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className='absolute left-4 text-white hover:text-gray-300'
          >
            <ChevronLeft className='h-8 w-8' />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className='absolute right-16 text-white hover:text-gray-300'
          >
            <ChevronRight className='h-8 w-8' />
          </button>
          <div className='relative h-full w-full max-w-5xl' onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt={title}
              fill
              className='object-contain'
              priority
            />
          </div>
        </div>
      )}
    </>
  )
}
