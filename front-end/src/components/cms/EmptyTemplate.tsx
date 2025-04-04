import React, { memo } from 'react'
import Btn from '../AdRegistration/btn'

type EmptyTemplateProps = {
  img: string
  title: string
  des: string
  btnTitle: string
  link: string
}
const EmptyTemplate: React.FC<EmptyTemplateProps> = memo(
  ({ img, title, des, btnTitle, link }) => {
    return (
      <>
        <div className="px-28.5 pb-11">
          <div className="center">
            <img src={img} alt="img" />
          </div>
          <div className="center flex-col text-center gap-y-5 mt-4">
            <h5 className="text-gray-1000 font-shabnamBold text-xl lg:text-2xl">
              {title}
            </h5>
            <span className="text-gray-71 font-shabnam text-sm lg:text-xl">
              {des}
            </span>
            <Btn link={link} title={btnTitle} />
          </div>
        </div>
      </>
    )
  }
)
export default EmptyTemplate
