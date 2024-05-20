import axios from 'axios';

const api_url = process.env.REACT_APP_API_URL;



export async function getHistory(token, sub){
    const response = await  axios.get(`${api_url}/user/history/${sub}`,{
        headers:{
            authorization: `Bearer ${token}`,
        }
    });

    console.log("[Inside GetHistory]",response);

    return response.data;
}
