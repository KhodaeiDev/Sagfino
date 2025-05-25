import { NavLink } from 'react-router'

interface BoxHelptypes {
  svg: string
  title: string
  description: string
  contentBtn: string
  link: string
}

const BoxHelp: React.FC<BoxHelptypes> = ({
  svg,
  title,
  description,
  contentBtn,
  link,
}) => {
  return (
    <>
      <div className="   bg-boxHelp/20  border border-boxHelp  rounded-2xl  !p-3 lg:!p-8 !h-auto ">
        <div className=" flex flex-col gap-2.5">
          <img className=" mix-blend-darken" src={svg} alt="svg" />
          <h1 className=" font-shabnamBold text-center  text-xs md:text-sm  lg:text-xl  text-Gray-35 ">
            {title}
          </h1>
          <span className=" font-shabnam text-sm  text-center  text-gray-1000 clamped-text  ">
            {description}
          </span>
        </div>
        <NavLink
          to={link}
          className=" py-1 md:py-2 bg-primary center cursor-pointer  w-full  mt-6   rounded-lg font-shabnamMedium text-xs lg:text-sm text-white"
        >
          {contentBtn}
        </NavLink>
      </div>
    </>
  )
}

export default BoxHelp
