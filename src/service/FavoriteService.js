import axios from 'axios';

const api_url = process.env.REACT_APP_API_URL;


export async function addFavorite(token, sub, link){
    console.log("Add Favorite");
    const response = await axios.post(`${api_url}/user/favorites/addFavorite`,
    {
        videoLink: link,
        sub: sub
    }
    ,{
        headers:{
            authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}


export async function getFavorite(token, sub){
    const response = await  axios.get(`${api_url}/user/favorites/${sub}`,{
        headers:{
            authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}


export async function deleteFavoriteBySongId(token, sub, songId){
    console.log("[Inside deleteFavoriteBySongId]");
    console.log(songId)
    const response = await axios.post(`${api_url}/user/favorites/deleteFavorite`,
    {
        songId: songId,
        subUser: sub
    }
    ,{
        headers:{
            authorization: `Bearer ${token}`,
        }
    });
    console.log("[Inside deleteFavoriteBySongId]",response.data);
    return response.data;
}