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

