import { NavBar } from '../../components/navBar/navBar'
import Sorting from '../../components/sorting/sorting'
import { NavBarMobail } from '../../components/navBar/navBar'

const Rent: React.FC = () => {
  return (
    <>
      <div className=" hidden lg:flex">
        <NavBar />
      </div>
      <div className=' lg:hidden'>
        <NavBarMobail />
      </div>
      <Sorting />
    </>
  )
}

export default Rent
