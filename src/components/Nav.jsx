import React from 'react'
import { useSelector } from 'react-redux'
import { IoFastFoodOutline, IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

function Nav({ searchValue, onSearchChange, onCartClick }) {
  const cartItems = useSelector(state => state.cart.items)
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
 
  return (
    <div className='w-full bg-slate-400 flex flex-col gap-6 px-8 py-6'>
      <div className='flex items-center justify-between gap-6'>
        <div className='w-20 h-20 bg-amber-200 flex justify-center items-center rounded-3xl shadow-lg'>
          <IoFastFoodOutline className="w-12 h-12 text-green-500" />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='flex-1 h-20 bg-white flex items-center px-6 gap-4 rounded-full shadow-lg'>
          <IoSearch className='text-green-400 w-8 h-8 rounded-md shadow-xl'/>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder='Search the items...'
            className='w-full outline-none text-xl'
          />
        </form>
        <div onClick={onCartClick} className='w-20 h-20 bg-amber-200 flex justify-center items-center shadow-xl cursor-pointer relative rounded-3xl'>
          <FiShoppingCart className='w-10 h-10 text-green-500 '/> 
          {cartCount > 0 && (
            <span className='absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold'>
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Nav