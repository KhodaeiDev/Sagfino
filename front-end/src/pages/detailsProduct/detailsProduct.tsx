import { NavBar, NavBarMobail } from '../../components/navBar/navBar'
import React, { useState } from 'react'
import ModalSlaider from '../../components/modalSlaider/modalSlaider'

const DetailsProduct: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState('')

  const images = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
  ]

  const openModal = (image: string) => {
    setCurrentImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentImage('')
  }

  return (
    <>
      {/* NavBar */}
      <div className="hidden lg:flex">
        <NavBar />
      </div>
      <div className="flex lg:hidden">
        <NavBarMobail />
      </div>

      <div className="container mt-10 lg:mt-22">
        <div
          className="w-full  h-50  md:h-90 lg:h-110 rounded-2xl overflow-hidden cursor-pointer hover:scale-95 transform transition duration-300"
          onClick={() => openModal(images[0])}
        >
          <img
            className="w-full h-full object-cover"
            src={images[0]}
            alt="Main Image"
          />
        </div>
      </div>

      {/* Centered Images Grid */}
      <div className="container  mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.slice(1).map((src, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transform transition duration-300"
              onClick={() => openModal(src)}
            >
              <img
                className="w-full  h-40 lg:h-56 object-cover"
                src={src}
                alt={`Image ${index + 2}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ModalSlaider
          images={images} 
          currentImage={currentImage} 
          onClose={closeModal} 
        />
      )}
    </>
  )
}

export default DetailsProduct
