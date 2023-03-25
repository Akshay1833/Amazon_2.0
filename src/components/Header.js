import React from 'react'
import Image from 'next/image';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* TOP NAVBAR */}
      <div className = 'flex items-center bg-amazon_blue p-1 flex-grow py-2'>
        <div className = 'mt-2 flex item-center flex-grow sm:flex-grow-0'>
          <Image 
          src="https://links.papareact.com/f90"
          width={150}
          height={40}
          ObjectFit = "contain"
          className = "cursor-pointer"
          />
        </div>

        {/* SEARCHBAR */}
        <div className='hidden sm:flex items-center ml-5 h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
          <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none' type="text" />
          <SearchIcon className='h-12 p-4' />
        </div>

        {/* RIGHT-HAND SIDE */}
        <div className='text-white flex items-center text-xs space-x-10 mx-6 whitespace-nowrap'>
          <div className='link'>
            <p>Hello Akshay Dhakan</p>
            <p className='font-extrabold md:text-md'>Account & Lists</p>
          </div>
          
          <div className='link'>
            <p>Retuns</p>
            <p className='font-extrabold md:text-md'>& Orders</p>
          </div>
          
          <div className='relative link flex items-center'>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 text-center rounded-full text-black font-bold bg-yellow-400 round-5'>0</span>
            <ShoppingCartIcon className='h-10'/>
            <p className='hidden md:inline font-extrabold md:text-md'>Basket</p>
          </div>
        </div>
    </div>
    
    {/* BOTTOM NAVBAR */}
    <div className='flex items-center space-x-5 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
      <p className='link items-center inline-flex'>
      <MenuIcon className='h-10 mr-1'/>
      All
      </p>
      <p className='link'>Prime Video</p>
      <p className='link'>Amazon Business</p>
      <p className='link'>Today's Best Deals</p>
      <p className='link largeScreen'>Electronics</p>
      <p className='link largeScreen'>Food & Grocery</p>
      <p className='link largeScreen'>Prime</p>
      <p className='link largeScreen'>Buy Again</p>
      <p className='link largeScreen'>Shopper Toolkit</p>
      <p className='link largeScreen'>Health & Personal Care</p>
    </div>
    </header>
  )
}

export default Header