import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/cartSlice';

const Product = ({post}) => {
  const {cart} = useSelector((state) => state);
  const disPatch = useDispatch();

  const removeCart = () => {
    disPatch(remove(post.id)); 
    toast.error('Item Removed From Cart');
  }
  
  const addCart = () => {
    disPatch(add(post));
    toast.success('Item Added to The Cart Successfully');
  }

  return (
    <div className=" bg-orange-300 flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <div>
          <p className="text-gray-800 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
        </div>
        <div>
          <p className="w-40 text-gray-600 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>
        <div className="h-[180px]">
          <img src={post.image}  className="h-full w-full " />
        </div>
        <div className="flex justify-between gap-12 items-center w-full mt-5">
          <p className="text-green-600 font-semibold"> {post.price}/- </p>
        </div>
        <div>
          {
            cart.some((p) => p.id == post.id) ? 
            (
              <button
              className="text-gray-700 border-2 border-red-200 rounded-full font-semibold 
              text-[12px] p-1 px-3 uppercase 
              hover:bg-red-600
              hover:text-white transition duration-300 ease-in"
                onClick={removeCart}
              >Remove From Cart</button>
            ) : 
            (
              <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
              text-[12px] p-1 px-3 uppercase 
              hover:bg-gray-700
              hover:text-white transition duration-300 ease-in"
                onClick={addCart}
              >Add To Cart</button>
            )
          }
        </div>
    </div>
  )
}

export default Product

