import axios from "axios";
const api_url = process.env.REACT_APP_API_URL;

export async function getSongsList(token, songName){
    const response = await  axios.post(`${api_url}/user/searchName`,{
            songName: songName,
        },{
        headers:{
            authorization: `Bearer ${token}`,
        }
    });

    console.log("[Inside GetHistory]",response);

    return response.data;
}
