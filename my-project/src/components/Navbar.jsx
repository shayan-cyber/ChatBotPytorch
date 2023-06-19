import React from 'react'
import {BsRobot} from 'react-icons/bs'

function Navbar() {
  return (
    <div className='flex justify-start w-full bg-white items-center p-4 border-b-[1px]'>
      <div className='w-16 h-16 flex items-center border-2 border-indigo-500 text-indigo-500 rounded-full'>

        <div className='mx-auto text-4xl'>
        <BsRobot/>

        </div>

      </div>
      <div className='text-xl text-black ml-4' >
        <h1>ChatBOT</h1>

        <p className='text-xs text-emerald-300'> Online</p>

      </div>




    </div>
  )
}

export default Navbar