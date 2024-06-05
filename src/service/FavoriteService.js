import axios from 'axios';

const api_url = process.env.REACT_APP_API_URL;


export async function addFavorite(token, userSub, link){
    console.log("Add Favorite");
    const response = await axios.post(`${api_url}/user/favorite/addFavoriteByUserSub`,
    {
        videoLink: link,
        userSub: userSub
    }
    ,{
        headers:{
            authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}


export async function getFavorite(token, userSub){
    const response = await  axios.get(`${api_url}/user/favorite/getFavoritesByUserSub/${userSub}`,{
        headers:{
            authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}


export async function deleteFavoriteBySongId(token, userSub, songId){
    console.log("[Inside deleteFavoriteBySongId]");
    console.log(songId)
    const response = await axios.post(`${api_url}/user/favorite/deleteFavoriteBySongId`,
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