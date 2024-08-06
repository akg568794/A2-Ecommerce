import React from 'react'
import { Link } from 'react-router-dom'
import cancelImage from "../assest/cancel.gif"

const Cancel = () => {
    return (
    <div className='flex h-[calc(100vh-120px)] w-full justify-center items-center'>
      <div className='max-w-md flex flex-col justify-center items-center p-4'>
        <img src={cancelImage} width={200} height={200} alt="Success"/>
        <p className='text-red-600 font-bold text-xl mt-4 mb-4'>Payment Cancelled</p>
        <Link to="/cart" className='p-2 px-3 rounded my-2 border-2 border-red-600 font-semibold text-red-600 hover:bg-red-600 hover:text-white'>
          Go To Cart
        </Link>
      </div>
    </div>
      )
}

export default Cancel
