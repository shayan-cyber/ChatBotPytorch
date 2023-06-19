import React, { useState } from 'react'
import Navbar from './Navbar'
import { sendMessage } from '../utils/server'
import Chat from './Chat'
import ChatInput from './ChatInput'

function ChatWindow() {

    const [text, setText] = useState("")

    const [msgs, setMsgs] = useState([])

    const handleSend = () =>{
        console.log("hello");
        sendMessage(text).then((res)=>{
            console.log(res);
            setMsgs([...msgs,{
                text:text,
                isMe:true
            }, {
                text:res.data,
                isMe:false
            }])
            setText("")
        }).catch(e=>console.log(e))

    }
    console.log(msgs);
  return (
    <div className=''>

        <Navbar/>
        <div className='p-4 overflow-y-scroll h-[80vh]'>

        {msgs.map((item, id)=>{
            return <Chat obj={item}/>
        })}
        </div>
        


        <div className=''>

            <ChatInput text={text} handleSend={handleSend} setText={setText}/>

        </div>
        
    </div>
  )
}

export default ChatWindow