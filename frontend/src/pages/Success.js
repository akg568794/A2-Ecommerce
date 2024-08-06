import React from 'react'
import successImage from "../assest/success.gif";
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className='flex h-[calc(100vh-120px)] w-full justify-center items-center'>
      <div className='max-w-md flex flex-col justify-center items-center p-4'>
        <img src={successImage} width={200} height={200} alt="Success"/>
        <p className='text-green-600 font-bold text-xl'>Payment Successful</p>
        <Link to="/order" className='p-2 px-3 rounded my-2 border-2 border-green-600 font-semibold text-green-600 hover:bg-green-600 hover:text-white'>
          See Order
        </Link>
      </div>
    </div>
  )
}

export default Success
