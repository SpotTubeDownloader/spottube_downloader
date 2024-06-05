import axios from "axios";

const api_url = process.env.REACT_APP_API_URL;

export async function getRatingByUserSub(token, userSub){
    const response = await  axios.get(`${api_url}/user/rating/getRatingByUserSub/${userSub}`,{
        headers:{
            authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}

export async function updateRatingByUserSub(token, userSub, rating){
    const response = await axios.post(`${api_url}/user/rating/updateRatingByUserSub`,{
        userSub: userSub,
        rating: rating
    },{
        headers:{
            authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}