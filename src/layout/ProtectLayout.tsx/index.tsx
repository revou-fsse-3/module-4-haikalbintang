import { Outlet, Navigate } from 'react-router-dom'
import { Footer, Navbar } from '../../components'

const ProtectLayout = () => {
  const token = localStorage.getItem('token')

  if (token) {
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

  return <Navigate to="/" />
}

export default ProtectLayout
