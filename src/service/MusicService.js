import axios from "axios";
import { saveAs } from 'file-saver';


const api_url = process.env.REACT_APP_API_URL;

export async function getSongsList(token, songName){
    const response = await  axios.get(`${api_url}/user/song/searchByName/${songName}`,{
        headers:{
            authorization: `Bearer ${token}`,
        }
    });

    return response.data;
}

export async function streamSong(token, songLink){
    try{
        let link = encodeURIComponent(songLink);
        const response = await axios.get(`${api_url}/user/song/streamSong/${link}`,{
            headers:{
                authorization: `Bearer ${token}`,
            }, responseType: 'blob'

        });
        return response;
    } catch(error){
        throw new Error(error);
    }
}


export async function downloadSongByYoutubeLink(token, userSub, link) {
    try{
        const response = await axios.post(`${api_url}/user/song/downloadSongByLink`,{
            songLink: link,
            userSub: userSub
        },{
            headers:{
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            }, responseType: 'blob'
        });
        const songNameCompressed = response.headers['songname'];
        const songName = decodeURIComponent(songNameCompressed)
        
            const blob = new Blob([response.data], { type: 'audio/mpeg' });
            saveAs(blob, `${decodeURIComponent(songName)}.mp3`);
            return true;
    }catch(error){
        throw new Error(error);
    }
}

