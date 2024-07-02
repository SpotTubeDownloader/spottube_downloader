import axios from 'axios';

const api_url = process.env.REACT_APP_API_URL;



export async function getHistory(token, userSub){
    const response = await  axios.get(`${api_url}/user/history/getHistoryByUserSub/${userSub}`,{
        headers:{
            authorization: `Bearer ${token}`,
        }
    });


    return response.data;
}

export async function deleteElementinHistoryBySongId(token, userSub, songId){
    const response = await axios.post(`${api_url}/user/history/deleteElementinHistoryBySongId`,
    {
        songId: songId,
        userSub: userSub
    }
    ,{
        headers:{
            authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}

export async function addHistoryByUserSub(token, userSub, link){
    const response = await axios.post(`${api_url}/user/history/addHistoryByUserSub`,
    {
        link: link,
        userSub: userSub
    }
    ,{
        headers:{
            authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}



