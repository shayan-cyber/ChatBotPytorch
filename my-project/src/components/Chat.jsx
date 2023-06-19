import React from "react";
import { BsRobot } from "react-icons/bs";
import {RxAvatar} from 'react-icons/rx'
function Chat({ obj }) {
  return (
    <>
      <div className={obj.isMe ? "flex  justify-end" : "flex  justify-start"}>
        <div className=" w-1/2 ">
            <div className={obj.isMe? "flex justify-end":"flex justify-start"}>
            <div className={obj.isMe?"text-blue-600 border-2 border-blue-600 flex p-2 rounded-full  mb-1 justify-end":"text-indigo-600  p-2 border-2 border-indigo-600 flex rounded-full mb-1"}>

                {obj.isMe?(
                   <div className="mx-auto text-4xl">
                   <RxAvatar/>
               </div>
                ):(<div className="mx-auto text-4xl">
                    <BsRobot/>
                </div>)}
            </div>
            </div>
          

          <div
            className={
              obj.isMe
                ? "bg-gray-200 text-start text-black mb-6 p-4  rounded-xl"
                : "bg-blue-500 text-start text-white mb-6 p-4 rounded-xl"
            }
          >
            {obj.text}
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
