import { useNavigate, Link } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src="src\assets\pokeapi-removebg-preview.png" alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <button
                  onClick={() => navigate('/')}
                  className="bg-gray-900 text-yellow-400 rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </button>
                <button
                  onClick={() => navigate('/stats')}
                  className="bg-gray-900 text-yellow-400 rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Stats
                </button>
                {/* <Link className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" to={'/protect'}>
                  {' '}
                  Protect
                </Link>
                <Link className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" to={'/product'}>
                  {' '}
                  Product
                </Link> */}
                {/* <Link className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" to={'/user'}>
                  {' '}
                  User
                </Link> */}
                {/* <button onClick={() => navigate('/about')} className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">About</button> */}
                {/* <Link className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" to={'/about'}>
                  {' '}
                  About
                </Link>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Contact Us
                </button> */}
                <Link className="bg-gray-900 text-green-500 rounded-md px-3 py-2 text-sm font-medium" to={'/category'}>
                  {' '}
                  Category
                </Link>
                <Link className="bg-gray-900 text-green-500 rounded-md px-3 py-2 text-sm font-medium" to={'/register'}>
                  {' '}
                  Register
                </Link>
                <Link className="bg-gray-900 text-green-500 rounded-md px-3 py-2 text-sm font-medium" to={'/login'}>
                  {' '}
                  Login
                </Link>
                <Link className="bg-gray-900 text-red-600 rounded-md px-3 py-2 text-sm font-medium" to={'/form'}>
                  {' '}
                  Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
