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

export async function deleteElementinHistoryBySongId(token, sub, songId){
    const response = await axios.delete(`${api_url}/user/history/deleteElementinHistoryBySongId/${sub}`,
    {
        songId: songId,
        sub: sub
    }
    ,{
        headers:{
            authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}
