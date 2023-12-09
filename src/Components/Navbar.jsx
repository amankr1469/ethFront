import React from 'react'
import { Link,NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <div className='mt-[80px]  h-[200px] '>
      <nav className=''>
      <ul className='flex justify-between px-[80px] mx-auto'>
        <li className='text-2xl font-bold text-purple-600'>
        <NavLink to="/">
        Home
        </NavLink>  
      </li>
        <li className='text-2xl font-bold text-purple-600'>
         <NavLink to="/admin">
         Admin
         </NavLink>
        </li>
        <li className='text-2xl font-bold text-purple-600'>
         <NavLink to="/user">
         User
         </NavLink>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
