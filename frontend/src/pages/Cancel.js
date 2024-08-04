import React from 'react'
import { Link } from 'react-router-dom'
import cancelImage from "../assest/cancel.gif"

const Cancel = () => {
    return (
        <div className='bg-gray-200 w-full max-w-md mx-auto flex flex-col justify-center items-center p-4'>
            <img className='' src={cancelImage} width={200} height={200}></img>
            <p className='text-red-500 font-bold text-xl'>Payment Cancelled</p>
            <Link to="/cart" className='p-2 px-3 rounded my-2 border-2 border-red-500 font-semibold text-red-600 hover:bg-red-500 hover:text-white'>Go To Cart</Link>
        </div>
      )
}

export default Cancel