import React, { useState, useRef, memo, useCallback } from 'react'
import ReactDom from 'react-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { BsImageFill } from 'react-icons/bs'
import { Image } from '../../../../pages/site/detailsProduct/detailsProduct'

type ModalSlaiderProps = {
  images: Image[]
  currentImage: string
  onClose: () => void
}

const ModalSlaider: React.FC<ModalSlaiderProps> = memo(
  ({ images, onClose }) => {
    const [isZoomed, setIsZoomed] = useState<boolean>(false)
    const [hoverEnabled, setHoverEnabled] = useState<boolean>(true)
    const [zoomState, setZoomState] = useState<boolean>(false)
    const imageRef = useRef<HTMLDivElement>(null)
    const [hoverPosition, setHoverPosition] = useState<{
      x: number
      y: number
    }>({
      x: 0,
      y: 0,
    })

    const toggleZoom = useCallback(() => {
      setIsZoomed(!isZoomed)
      if (isZoomed) {
        setHoverEnabled(true)
        setZoomState(false)
      } else {
        setHoverEnabled(false)
        setZoomState(true)
      }
    }, [isZoomed])

    const handleFullscreen = useCallback(() => {
      if (imageRef.current) {
        if (!document.fullscreenElement) {
          imageRef.current.requestFullscreen().catch((err) => {
            console.error(`خطا در ورود به حالت فول اسکرین: ${err.message}`)
          })
        } else {
          document.exitFullscreen().catch((err) => {
            console.error(`خطا در خروج از حالت فول اسکرین: ${err.message}`)
          })
        }
      }
    }, [imageRef])

    const handleMouseMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (hoverEnabled) {
          const { left, top, width, height } =
            e.currentTarget.getBoundingClientRect()
          const x = ((e.clientX - left) / width) * 100
          const y = ((e.clientY - top) / height) * 100
          setHoverPosition({ x, y })
        }
      },
      [hoverEnabled, setHoverPosition]
    )

    const handleMouseLeave = useCallback(() => {
      if (hoverEnabled) {
        setHoverPosition({ x: 0, y: 0 })
      }
    }, [hoverEnabled, setHoverPosition])

    return ReactDom.createPortal(
      <div className="modals-parent active flex flex-col gap-y-10">
        <div className="mr-10 w-full flex items-center gap-4 justify-center">
          <button
            onClick={onClose}
            className="cursor-pointer z-50 bg-red-600 text-white px-4 py-2 rounded"
          >
            خروج
          </button>

          <button
            onClick={toggleZoom}
            className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded shadow-md z-50"
          >
            {isZoomed ? 'کوچک‌نمایی' : 'بزرگ‌نمایی'}
          </button>

          <button
            onClick={handleFullscreen}
            className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded shadow-md z-50"
          >
            تمام صفحه
          </button>
        </div>

        <div
          ref={imageRef}
          className="modal-container relative w-full max-w-4xl h-3/4 rounded-lg overflow-hidden lg:mx-0 sm:mx-4"
        >
          <button
            className="swiper-button-next swiper-button-next-detailsProducts absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white rounded-full shadow-md p-3"
            id="nextBtn"
          ></button>

          <button
            className="swiper-button-prev swiper-button-prev-detailsProducts absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white rounded-full shadow-md p-3"
            id="prevBtn"
          ></button>

          <Swiper
            navigation={{
              prevEl: '#prevBtn',
              nextEl: '#nextBtn',
            }}
            modules={[Navigation]}
            className="mySwiper w-full h-full"
          >
            {images.length > 0 ? (
              images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={`relative w-full h-full bg-gray-900 overflow-hidden flex items-center justify-center ${
                      hoverEnabled ? 'cursor-zoom-in' : ''
                    }`}
                  >
                    <img
                      className={`${
                        isZoomed || zoomState
                          ? 'scale-125 max-w-none max-h-none'
                          : 'max-w-full max-h-full'
                      } object-cover transition-transform duration-300`}
                      src={`https://saghfino.abolfazlhp.ir/storage/${image.path}`}
                      alt={`Slide img`}
                      style={{
                        transformOrigin: `${hoverPosition.x}% ${hoverPosition.y}%`,
                        transform:
                          hoverEnabled && hoverPosition.x && hoverPosition.y
                            ? 'scale(2)'
                            : 'scale(1)',
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <div className="w-full h-40 lg:h-56 flex items-center justify-center bg-gray-200 rounded-2xl">
                <BsImageFill className="w-10 h-10 text-gray-500" />
                <p className="text-gray-500 mt-2">
                  تصویری برای نمایش موجود نیست
                </p>
              </div>
            )}
          </Swiper>
        </div>
      </div>,
      document.getElementById('modals-parent') as HTMLElement
    )
  }
)
export default ModalSlaider
