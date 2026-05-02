import React from 'react'
import { IoTrash } from 'react-icons/io5'

function Card2({ item, quantity, onIncrease, onDecrease, onDelete }) {
  return (
    <div className='bg-white p-4 rounded-lg shadow-lg flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <img src={item.image} alt={item.name} className='w-50 h-40 object-cover rounded-md' />
        <div className='flex flex-col flex-1'>
          <h2 className='text-xl font-semibold'>{item.name}</h2>
          <p className='text-green-800 text-2xl font-bold'>Rs. {item.price}/-</p>
        </div>
        <button onClick={onDelete} className='text-red-500 cursor-pointer'>
          <IoTrash size={35} />
        </button>
      </div>
      <div className='flex items-center justify-between'>
        <span className='text-gray-600 text-2xl'>Quantity:</span>
        <div className='flex items-center gap-2'>
          <button onClick={onDecrease} className='px-3 py-1 bg-red-500 text-white rounded'>-</button>
          <span className='px-3 py-1 border rounded'>{quantity}</span>
          <button onClick={onIncrease} className='px-3 py-1 bg-green-500 text-white rounded'>+</button>
        </div>
      </div>
    </div>
  )
}

export default Card2