// CustomSkeletonLoader.tsx
import React from 'react'
import ContentLoader from 'react-content-loader'

export interface Section {
  xOffset: number // فاصله از چپ
  yOffset: number
  width: number
  height: number
}

export interface ImageSection {
  xOffset: number
  yOffset: number
  width: string
  height: number
}

interface CustomSkeletonLoaderProps {
  width: number
  height: number
  imageSection: ImageSection // بخش تصویر
  textSections: Section[] // بخش‌های متنی
}

const CustomSkeletonLoader: React.FC<CustomSkeletonLoaderProps> = ({
  width,
  height,
  imageSection,
  textSections,
}) => {
  const sections: (Section | ImageSection)[] = [
    { ...imageSection, width: width }, // بخش تصویر با عرض کامل کامپوننت
    ...textSections,
  ]

  const loaderSections = sections.map((section, index) => (
    <rect
      key={index}
      x={section.xOffset} 
      y={section.yOffset}
      rx="10"
      ry="10"
      width={section.width}
      height={section.height}
    />
  ))

  return (
    <ContentLoader
      speed={1.5}
      width={'100%'}
      height={"400"}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor="#cccccc"
      foregroundColor="#999999"
      style={{ padding: 0, margin: 0 }} // اطمینان از اینکه هیچ حاشیه‌ای وجود ندارد
    >
      {loaderSections}
    </ContentLoader>
  )
}

export default CustomSkeletonLoader
