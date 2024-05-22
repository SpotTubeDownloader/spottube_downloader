import axios from "axios";
import { saveAs } from 'file-saver';

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


export async function downloadSongByYoutubeLink(token, sub, link) {
    try{
        const response = await axios.post(`${api_url}/user/downloadSongBySongName`,{
            songLink: link,
            sub: sub
        },{
            headers:{
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            }, responseType: 'blob'
        });
        const songName = response.headers['songname'];
        const blob = new Blob([response.data], { type: 'audio/mpeg' });
        saveAs(blob, `${songName}.mp3`);
        return true;
    }catch(error){
        throw new Error(error);
    }
    
}
