import React from 'react'

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center relative">
      <div>
        <img
          src="/img/logo.png"
          alt="logo"
          className={`w-20 h-15 xl:w-32 xl:h-16  `}
        />
        <div
          className={`font-semibold absolute -bottom-1  xl:-bottom-2 font-shabnamLight text-primary text-xs xl:text-lg `}
        >
          سقفینــــــــــــــــــو
        </div>
      </div>
    </div>
  )
}

export default Logo
