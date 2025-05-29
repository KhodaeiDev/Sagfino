import { memo } from 'react'
import { NavLink } from 'react-router'

type SectionHeaderProps = {
  title: string
  dec?: string
  center: boolean
  btnTitle?: string
  btnHref?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = memo(
  ({ title, dec, center, btnTitle, btnHref }) => {
    return (
      <>
        <div className="container">
          <div className="w-full mb-5 md:mb-8">
            <div
              className={`flex  flex-col   justify-center ${
                center ? ' items-center ' : ' items-start'
              } font-shabnamBold   text-sm  md:text-32 text-Gray-35 `}
            >
              <div
                className={` w-full  h-auto flex items-center  ${
                  center ? ' justify-center' : ' justify-between '
                } `}
              >
                <h3 className=" text-gray-21">{title}</h3>
                {btnTitle ? (
                  <NavLink
                    className={
                      'text-gray-71  transition-all duration-300 hover:text-primary font-shabnamMedium  text-xs md:text-lg'
                    }
                    to={`${btnHref}`}
                  >
                    {btnTitle}
                  </NavLink>
                ) : (
                  ''
                )}
              </div>
              {dec ? (
                <h5 className="font-shabnam text-xs lg:text-2xl"> {dec}</h5>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </>
    )
  }
)
export default SectionHeader
