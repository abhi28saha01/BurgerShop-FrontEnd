import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { AiFillWarning } from 'react-icons/ai';

const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=> {

    setTotalAmount(cart.reduce((acc,curr) => acc + curr.price,0));

  },[cart]);

  return (
    <div>
      
      {
        cart.length > 0 ? (
          <div className='flex flex-row gap-5 h-screen'>
              {/* Cart Item */}
              <div className='flex flex-col w-[50vw] gap-4 mt-4'>
                {
                  cart.map((item,index) => {
                    return (
                      <div>
                        <CartItem key={item.id} item={item} itemIndex={index}/>
                        <div className="bg-orange-400 h-[4px] w-3/5 mt-2 mx-auto"></div>
                      </div>
                    )
                  })
                }
              </div>

                {/* Second Part */}
              <div className='flex flex-col h-[80vh] justify-between mt-4'>
                <div className='flex flex-col'>
                  <div className='text-green-500 font-bold'>Your Cart</div>
                  <div className='text-green-600 text-5xl font-bold'>Summary</div>
                  <p className='text-black font-bold'>
                    <span>Total Items : </span> {cart.length}
                  </p>
                </div>

                <div className=' flex flex-col gap-2'>
                  <p className='text-gray-600 font-bold'>Total Amount : <span className='font-bold text-black'> {totalAmount}/- </span> </p>
                  <button className='bg-green-800 rounded-full font-bold text-white
              text-[15px] p-2 px-3 uppercase '>Order Now</button>
                </div>

              </div>
          </div>

        ) :  
        (
          <div className=" h-[87vh] w-full flex flex-col gap-3 justify-center items-center">
            <div className='flex gap-1'>
              <AiFillWarning  className="text-2xl text-yellow-900" /> 
              <p className='font-bold text-teal-950 text-1xl'>  Cart Empty</p>
            </div>
            <NavLink to='/'>
              <button className="text-green-700 border-2 border-green-700 rounded-full font-bold 
              text-[12px] p-3 px-3 uppercase 
              hover:bg-green-700
              hover:text-white transition duration-300 ease-in">Go Back to Home</button>
            </NavLink>
          </div>
        )
      }

    </div>
  )
}

export default Cart;

