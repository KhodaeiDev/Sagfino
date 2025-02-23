import React from 'react'

interface LogoProps {
  width: string
  height: string
  fontSize: string
}

const Logo: React.FC<LogoProps> = ({ width, height, fontSize }) => {
  return (
    <div className="flex flex-col items-center relative">
      <div>
        <img
          src="img/logo.png"
          alt="logo"
          className={`w-${width} h-${height}`}
        />
        <div
          className={`font-semibold absolute -bottom-2 font-shabnamLight text-primary text-${fontSize}`}
        >
          سقفینــــــــــــــــــــو
        </div>
      </div>
    </div>
  )
}

export default Logo
