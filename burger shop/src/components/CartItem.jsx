import React from 'react';
import {MdDelete} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item,itemIndex}) => {

  const disPatch = useDispatch();

  function removeFromCart(){
    disPatch(remove(item.id));
    toast.error('Item Removed Successfully');
  }

  return (
    <div className=' w-[11/12] flex justify-center gap-3'>
      <div className=''>
        <img src={item.image} className="h-[100px]  w-[100px]" />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='text-gray-900 font-bold text-lg truncate w-40'>
          {item.title}
        </div>
        <div className="w-40 text-gray-400 font-semibold text-[13px] text-left">
          {item.description.split(" ").slice(0,10).join(" ") + "..."}
        </div>
        <div className='flex justify-between'>
            <div>
              <span className='font-bold text-green-500'>{item.price}/-</span>
            </div>
            <div onClick={removeFromCart} className='text-red-700 text-2xl '>
              <MdDelete />
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem ;
