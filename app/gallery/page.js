'use client'

import { useState } from 'react'
import Image from 'next/image'

const galleryImages = [
  { src: '/gallery-1.jpg', alt: 'Bar interior' },
  { src: '/gallery-2.jpg', alt: 'Signature cocktail' },
  { src: '/gallery-3.jpg', alt: 'Live music performance' },
  { src: '/gallery-4.jpg', alt: 'Lounge area' },
  { src: '/gallery-5.jpg', alt: 'Bartender in action' },
  { src: '/gallery-6.jpg', alt: 'Outdoor seating' },
  { src: '/gallery-7.jpg', alt: 'Food platter' },
  { src: '/gallery-8.jpg', alt: 'VIP section' },
  { src: '/gallery-9.jpg', alt: 'Dance floor' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="max-w-4xl w-full p-4">
            <div className="relative aspect-video">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-center mt-2 text-white">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  )
}

