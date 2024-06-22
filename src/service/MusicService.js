import axios from "axios";
import { saveAs } from 'file-saver';
import Player from "../components/player/Player";


const api_url = process.env.REACT_APP_API_URL;

export async function getSongsList(token, songName){
    const response = await  axios.get(`${api_url}/user/song/searchByName/${songName}`,{
        headers:{
            authorization: `Bearer ${token}`,
        }
    });

    console.log("[Inside GetHistory]",response);

    return response.data;
}


export async function getHistory(token, userSub){
    const response = await  axios.get(`${api_url}/user/history/getHistoryByUserSub/${userSub}`,{
        headers:{
            authorization: `Bearer ${token}`,
        }
    });

    console.log("[Inside GetHistory]",response);

    return response.data;
}


export async function downloadSongByYoutubeLink(token, userSub, link, save=true) {
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
        if (save){
            const blob = new Blob([response.data], { type: 'audio/mpeg' });
            saveAs(blob, `${decodeURIComponent(songName)}.mp3`);
            return true;
        }
        else{
            // save the song in the browser storage
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const audio = new Audio(url);
            audio.play();
            // get the length of the song
            const duration = await new Promise((resolve) => {
                audio.onloadedmetadata = () => {
                    resolve(audio.duration);
                };
            });
            // get the duration in MM:SS format if seconds are less than 10, add a 0 before the seconds
            const durationInMinutes = `${Math.floor(duration / 60)}:${Math.floor(duration % 60) < 10 ? `0${Math.floor(duration % 60)}` : Math.floor(duration % 60)}`;
            console.log(durationInMinutes);
            return [songName, durationInMinutes];
        }
    }catch(error){
        throw new Error(error);
    }
}

