import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-green-700 text-gray-900 font-bold w-full p-2 flex items-center justify-center fixed z-[999] top-0'>
      <Link to={"/"}><i className="fa-solid fa-house fa-2xl "></i></Link>
    </div>
  )
}

export default Header
