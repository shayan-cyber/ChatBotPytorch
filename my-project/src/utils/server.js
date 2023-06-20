import axios from "axios"


const URL = process.env.REACT_APP_SERVER_URL ? process.env.REACT_APP_SERVER_URL:''

export const sendMessage =  async (body) =>{
    console.log(body);
    console.log(process.env.REACT_APP_SERVER_URL);
    try{
        const resp = await axios.post(URL, {
            text:body
        });
        // console.log(resp);
        return resp.data
    }catch(err){
        console.log(err);
        throw new Error(err);
    }  
}



export const sendMessageWS = async (room , socket,currentMessage) =>{
    // console.log("herew");
    if (currentMessage !== "") {
        const messageData = {
          room: room,
        //   author: username,
          message: currentMessage,
          time:
            new Date(Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes(),
        };
        // console.log("herew");
        

            const res =  socket.emit("send_message", messageData);
        
        // console.log("herew", res);
        // setMessageList((list) => [...list, messageData]);
        // setCurrentMessage("");
      }
}
