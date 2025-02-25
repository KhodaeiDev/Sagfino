import HeaderContent from '../headerContent/headerContent'
import { NavBar } from '../navBar/navBar'
import { NavBarMobail } from '../navBar/navBar'


const Header: React.FC = () => {

  return (
    <>
      <div className="main-home hidden lg:flex flex-col gap-40 ">
        <NavBar />
        <HeaderContent />
      </div>

     <NavBarMobail/>

      <div className="main-home  flex flex-col items-center justify-between  lg:hidden  ">
        <HeaderContent />
      </div>
    </>
  )
}
export default Header
