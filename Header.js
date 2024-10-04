import React from 'react'
import Logo from './Logo';
import { FaSearchMinus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from 'react-router-dom';



function Header() {
  return (
    <header className='h-16 bg-white shadow-md'>
    <div className='h-full container mx-auto flex items-center px-4 justify-between'>
       <div>
       <Logo/>
       </div>

        <div className='hidden lg:flex items-center justify-between max-w-sm rounded-full focus-within:shadow p1-2'>
          <input type='text' placeholder='Search For Produc....'className='out-line-none w-full'/>
          <span className='text-lg bg-green-200 h-8 min-w-[50px] flex items-center justify-center rounded-r-full'>
            <FaSearchMinus />
           </span>
        </div>

    <div className='flex gap-5'>
        <div className='text-3xl'>
            <CgProfile />
        </div>
       <div className='text-3xl relative'>
         <span className='text-lg'><GiShoppingCart /></span>
         <div className='flex justify-center w-5 rounded-full bg-red-500 absolute -top-2 -right-3'>
            <p className='text-sm text-white'>0</p>
         </div>
        </div>
         <Link to={'/login'} className='px-3 bg-green-800 rounded-full text-white cursor-pointer py-2'>Login</Link>
    </div>
</div>
    </header>
  )
};

export default Header