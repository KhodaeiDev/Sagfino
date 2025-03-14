import React from 'react'

type SectionHeaderAdReProps = {
  title: string
  des?: string
  subdes?: string
  center?: boolean
}

const SectionHeaderAdRe: React.FC<SectionHeaderAdReProps> = ({
  title,
  des,
  subdes,
  center,
}) => {
  return (
    <>
      <div
        className={`flex justify-center ${
          center ? ' lg:justify-center ' : 'lg:justify-start'
        } mt-10  md:mt-16 `}
      >
        <h1 className=" font-shabnam text-sm md:text-2xl text-Gray-35 ">
          {title}
        </h1>
      </div>
      <div className=" flex flex-col gap-y-2 font-shabnam text-gray-90  text-xs md:text-sm mt-3 ">
        <span>{des}</span>
        <span>{subdes}</span>
      </div>
    </>
  )
}

export default SectionHeaderAdRe
