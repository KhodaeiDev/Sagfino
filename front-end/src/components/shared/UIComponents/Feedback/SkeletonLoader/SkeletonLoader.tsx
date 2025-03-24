import React, { useRef, useEffect, useState } from 'react'
import ContentLoader from 'react-content-loader'

export interface Section {
  xOffset: string
  yOffset: string
  width: string
  height: string
}

export interface ImageSection {
  yOffset: string
  height: string
}

interface CustomSkeletonLoaderProps {
  imageSection: ImageSection
  textSections: Section[]
}

const CustomSkeletonLoader: React.FC<CustomSkeletonLoaderProps> = ({
  imageSection,
  textSections,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState<number>(0)

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const renderSections = () => [
    <rect
      key="image"
      x="0"
      y={`${(parseFloat(imageSection.yOffset) * containerWidth) / 100}`}
      width="100%"
      height={`${(parseFloat(imageSection.height) * containerWidth) / 100}`}
    />,
    ...textSections.map((section, index) => {
      const rtlX =
        containerWidth -
        ((parseFloat(section.xOffset) + parseFloat(section.width)) *
          containerWidth) /
          100
      return (
        <rect
          key={index}
          x={`${rtlX}`}
          y={`${containerWidth * (parseFloat(section.yOffset) / 100)}`}
          rx="10"
          ry="10"
          width={`${containerWidth * (parseFloat(section.width) / 100)}`}
          height={`${containerWidth * (parseFloat(section.height) / 100)}`}
        />
      )
    }),
  ]

  if (containerWidth === 0) {
    return <div ref={containerRef} style={{ width: '100%' }} />
  }

  return (
    <div ref={containerRef} style={{ width: '100%' }} dir="rtl">
      <ContentLoader
        speed={1.5}
        width={containerWidth}
        height={containerWidth * 1.5}
        viewBox={`0 0 ${containerWidth} ${containerWidth * 1.5}`}
        backgroundColor="#cccccc"
        foregroundColor="#999999"
      >
        {renderSections()}
      </ContentLoader>
    </div>
  )
}

export default CustomSkeletonLoader
