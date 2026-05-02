import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../components/Nav'
import  Card from '../components/Card'
import Card2 from '../components/Card2'
import Categories from '../Categories'
import { IoClose } from 'react-icons/io5'
import { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from '../redux/cartSlice'
import {  food_items } from '../food'
function Nick() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  
  const [cate, setCate] = useState(food_items)
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchText, setSearchText] = useState('')
  const [showCart, setShowCart] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  function updateVisibleItems(category, query) {
    const normalizedQuery = query.trim().toLowerCase()
    const filtered = food_items.filter((item) => {
      const matchesCategory = category === 'All' || item.food_category === category
      const matchesSearch =
        normalizedQuery === '' ||
        item.food_name.toLowerCase().includes(normalizedQuery) ||
        item.food_category.toLowerCase().includes(normalizedQuery)
      return matchesCategory && matchesSearch
    })
    setCate(filtered)
  }

  function filter(categories) {
    setActiveCategory(categories)
    updateVisibleItems(categories, searchText)
  }

  function handleSearch(query) {
    setSearchText(query)
    updateVisibleItems(activeCategory, query)
  }

  function handleAddToCart(item) {
    dispatch(addToCart(item))
    setShowCart(true)
  }

  function handleIncreaseQuantity(id) {
    dispatch(increaseQuantity(id))
  }

  function handleDecreaseQuantity(id) {
    dispatch(decreaseQuantity(id))
  }

  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id))
  }

  function handleCartClick() {
    setShowCart(true)
  }

  function handleBack() {
    setShowCart(false)
  }

  function handlePlaceOrder() {
    setShowSuccessModal(true)
    setTimeout(() => {
      setShowSuccessModal(false)
      dispatch(clearCart())
      setShowCart(false)
    }, 2000)
  }

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.item.price * item.quantity), 0)
  const deliveryCharges = 15
  const gst = (totalAmount * 0.003).toFixed(2)
  const grandTotal = (parseFloat(totalAmount) + deliveryCharges + parseFloat(gst)).toFixed(2)

  if (showCart) {
    return (
      <div className='bg-green-200 w-full min-h-screen p-8'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-800'>Ordered Items</h1>
          <button onClick={handleBack} className='text-2xl cursor-pointer'>
            <IoClose />
          </button>
        </div>
        {cartItems.length === 0 ? (
          <div className='text-center text-xl text-gray-700'>No items in cart.</div>
        ) : (
          <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {cartItems.map((cartItem) => (
                <Card2 key={cartItem.item.id} item={cartItem.item} quantity={cartItem.quantity} onIncrease={() => handleIncreaseQuantity(cartItem.item.id)} onDecrease={() => handleDecreaseQuantity(cartItem.item.id)} onDelete={() => handleRemoveFromCart(cartItem.item.id)} />
              ))}
            </div>
            <div className='mt-12 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg'>
              <h2 className='text-2xl font-bold mb-4'>Order Summary</h2>
              <div className='space-y-2 mb-4'>
                <div className='flex justify-between'>
                  <span>Subtotal:</span>
                  <span className='font-semibold'>Rs. {totalAmount.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Delivery Charges:</span>
                  <span className='font-semibold'>Rs. {deliveryCharges}</span>
                </div>
                <div className='flex justify-between'>
                  <span>GST (0.3%):</span>
                  <span className='font-semibold'>Rs. {gst}</span>
                </div>
                <div className='border-t-2 pt-2 flex justify-between'>
                  <span className='text-lg font-bold'>Grand Total:</span>
                  <span className='text-lg font-bold text-green-600'>Rs. {grandTotal}</span>
                </div>
              </div>
              <button onClick={handlePlaceOrder} className='w-full p-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 cursor-pointer'>
                Place Order
              </button>
            </div>
          </>
        )}
        {showSuccessModal && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <div className='bg-white p-8 rounded-lg shadow-xl text-center'>
              <h2 className='text-2xl font-bold text-green-600 mb-4'>Order Placed Successfully!</h2>
              <p className='text-gray-600'>Your order has been confirmed.</p>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className='bg-green-200 w-full min-h-screen gap-2'>
        
        <Nav searchValue={searchText} onSearchChange={handleSearch} onCartClick={handleCartClick} />
        {searchText === '' && (
        <div className='w-full flex justify-center mt-8'>
          <div className='w-full max-w-6xl flex flex-wrap justify-center gap-6'>
            {Categories.map((item)=>{
                return (
                  <div key={item.name} className='w-44 h-32 bg-white flex flex-col items-start gap-4 p-4 justify-center text-xl text-gray-600 rounded-3xl hover:bg-red-300 cursor-pointer transition-all duration-500' onClick={()=>filter(item.name)}>
                    {item.name}
                    {item.icon}
                  </div>
                )
            })}
          </div>
        </div>
        )}
        <div className='w-full flex flex-wrap gap-10 px-8 justify-center items-center pt-10 pb-12'>
          {cate.length > 0 ? (
            cate.map((item)=>(
              <Card key={item.id} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} addToCart={handleAddToCart} item={item} />))
          ) : (
            <div className='w-full text-center text-xl text-gray-700'>No items found.</div>
          )}
        </div>
          
       
       

    </div>
    
  )
}

export default Nick