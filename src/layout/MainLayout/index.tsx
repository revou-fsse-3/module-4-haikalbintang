import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../../components'

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
