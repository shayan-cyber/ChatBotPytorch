import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { sendMessage, sendMessageWS } from "../utils/server";
import Chat from "./Chat";
import ChatInput from "./ChatInput";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");
function ChatWindow() {
  const { id } = useParams();
  const [text, setText] = useState("");
  const [isSwitched, setIsSwitched] = useState(false);
  const [msgs, setMsgs] = useState([]);
  console.log(id);
  socket.on("connect", () => {
    console.log("connected");
  });
  const handleSend = () => {
    if (!isSwitched) {
      sendMessage(text)
        .then((res) => {
          console.log(res);
          setMsgs([
            ...msgs,
            {
              text: text,
              isMe: true,
            },
            {
              text: res.data,
              isMe: false,
            },
          ]);
          setText("");
        })
        .catch((e) => console.log(e));
    } else {
      setMsgs([
        ...msgs,
        {
          text: text,
          isMe: true,
        },
      ]);
      sendMessageWS(id, socket, text);
    }
  };

  const joinRoom = () => {
    if (!isSwitched) {
      socket.emit("join_room", id);
    }
    setIsSwitched(!isSwitched);
  };

  // console.log(msgs);

  const handleSwitch = () => {
    setIsSwitched(true);
  };

  useEffect(() => {
    console.log("receving");
    socket.on("receive_message", (data) => {
      console.log({ msgs });
      setMsgs((msgs) => [
        ...msgs,
        {
          text: data,
          isMe: false,
        },
      ]);
    });
  }, [socket]);

  return (
    <div className="">
      <Navbar joinRoom={joinRoom} isSwitched={isSwitched} />
      <div className="p-4 overflow-y-scroll h-[80vh]">
        {msgs.map((item, id) => {
          return <Chat obj={item} />;
        })}
      </div>

      <div className="">
        <ChatInput
          text={text}
          handleSend={handleSend}
          setText={setText}
          isSwitched={isSwitched}
        />
      </div>
    </div>
  );
}

export default ChatWindow;
