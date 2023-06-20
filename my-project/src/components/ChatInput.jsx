import React from 'react'
import {IoSend} from 'react-icons/io5'
function ChatInput({text,setText, handleSend, isSwitched}) {
  return (
    <div className='shadow-md rounded-lg border-[1px] p-2 absolute bottom-0 left-0 right-0 mb-4 mx-2 bg-white'>
        <div className='flex items-center px-2'>
            <input className='w-full p-3 focus:outline-none' placeholder='Write Your Message...' value={text} onChange={(e)=>setText(e.target.value)} />
            <button className=' text-blue-400 text-4xl' onClick={handleSend}><IoSend/></button>


        </div>

    </div>
  )
}

export default ChatInput