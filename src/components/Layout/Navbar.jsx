import React from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()


  const handleLogout = () => {
    navigate('/')
    toast.success('Logged out successfully')
  }


  return (
    <div className="px-4 flex align-items-center justify-content-between relative lg:static lg:w-full p-0">
      <Link to='/dashboard' className="no-underline">
        <h3 className='text-3xl font-bold text-900 cursor-pointer'>Foodies
          <span className='text-3xl mb-2 text-yellow-500'>.</span>
        </h3>
      </Link>

      {/* <img src="" alt="Imag" height="50" /> */}
      <a href='#a' className="p-ripple cursor-pointer block lg:hidden text-900">
        <i className="pi pi-bars text-4xl">
        </i>
        <span role="presentation" className="p-ink" style={{ height: '34px', width: '34px', top: '8.66663px', left: '1px' }}>
        </span>
      </a>
      <div className="align-items-center flex-grow-1 lg:justify-content-end lg:flex absolute lg:static w-full left-0 top-100 px-6 lg:px-5 z-3 shadow-2 lg:shadow-none hidden">
        <ul className="list-none p-0 m-0 flex lg:align-items-center text-white select-none flex-column lg:flex-row cursor-pointer">
          <li className="relative">
            <Link to='/dashboard' className="no-underline p-ripple text-color no-underline flex px-0 lg:px-5 py-3 align-items-center hover:text-700 font-medium transition-colors transition-duration-150">
              <span>Home</span>

            </Link>
          </li>
          <li>
            <Link to='/dashboard/about' className="no-underline p-ripple text-color no-underline flex px-0 lg:px-5 py-3 hover:text-700  font-medium transition-colors transition-duration-150">
              <span>About</span>
              <span role="presentation" className="p-ink"></span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/contact' className="no-underline p-ripple text-color no-underline flex px-0 lg:px-5 py-3 hover:text-700  font-medium transition-colors transition-duration-150">
              <span>Contact Us</span>
              <span role="presentation" className="p-ink"></span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/posts' className="no-underline p-ripple text-color no-underline flex px-0 lg:px-5 py-3 hover:text-700  font-medium transition-colors transition-duration-150">
              <span>Foods</span>
              <span role="presentation" className="p-ink">
              </span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/add/posts' className="no-underline p-ripple text-color no-underline flex px-0 lg:px-5 py-3 hover:text-700  font-medium transition-colors transition-duration-150">
              <span>Add Post</span>
              <span role="presentation" className="p-ink">
              </span>
            </Link>
          </li>
        </ul>
        <div 
        className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0 lg:ml-5">
          <button
            onClick={handleLogout}
            aria-label="Login"
            className="p-button font-bold border-2 bg-black-alpha-90 border-0 border-transparent transition-colors transition-duration-200 bg-blue-500 hover:bg-orange-500 text-white hover:text-gray-900">
            <span className="p-button-icon p-c p-button-icon-left pi pi-power-off text-900  text-white"></span>
            <span className="p-button-label p-c text-900  text-white">Logout</span>
            <span role="presentation" className="p-ink"></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;