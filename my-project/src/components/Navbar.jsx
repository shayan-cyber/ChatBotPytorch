import React from "react";
import { BsRobot } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
function Navbar({joinRoom, isSwitched}) {
  return (
    <div className="flex justify-between w-full bg-white items-center p-4 border-b-[1px]">
      <div className="flex justify-start items-center">
        <div className="w-16 h-16 flex items-center border-2 border-indigo-500 text-indigo-500 rounded-full">
          <div className="mx-auto text-4xl">
            {isSwitched? ( <MdSupportAgent/>):(
              <BsRobot />
            )}
            
          </div>
        </div>
        <div className="text-xl text-black ml-4">
          <h1>{isSwitched ? "Customer Support":"ChatBOT"}</h1>

          <p className="text-xs text-emerald-300"> Online</p>
        </div>
      </div>
      <button className="text-4xl" onClick={joinRoom}>
      {isSwitched? ( <BsRobot/>):(
              <MdSupportAgent />
            )}

      </button>
    </div>
  );
}

export default Navbar;
