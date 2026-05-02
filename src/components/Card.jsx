import React from 'react'
import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiRoastChicken } from "react-icons/gi";
function Card({name,image,id,price,type, addToCart, item}) {
  return (
    <div className='w-80 bg-white p-5 rounded-3xl flex flex-col gap-4 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
        <div className='w-full h-64 overflow-hidden rounded-3xl'>
          <img src ={image} alt="" className='w-full h-full object-cover'/>
        </div>

        <div className='text-3xl font-semibold'>
            {name}
        </div>
        <div className='w-full flex justify-between items-center'>
            <div className='text-2xl font-bold text-green-500'>Rs. {price}</div>
            <div className='flex justify-center items-center gap-2 text-green-400 text-lg font-semibold'>{type === 'non_veg' ? <GiRoastChicken /> : <LuLeafyGreen />} <span>{type}</span></div>
        </div>
        <button onClick={() => addToCart({
          id: item.id,
          name: item.food_name,
          image: item.food_image,
          price: item.price,
          type: item.food_type
        })} className='w-full py-4 bg-orange-300 cursor-pointer hover:bg-orange-400 rounded-3xl text-lg font-semibold'>Add to Dish</button>
    </div>
  )
}
 
export default Card