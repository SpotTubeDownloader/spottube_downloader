import React, {useState} from "react";
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import {downloadSongByYoutubeLink, } from '../../service/MusicService';
import {deleteElementinHistoryBySongId} from '../../service/HistoryService';
import { useAuth0 } from '@auth0/auth0-react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { getHistory } from '../../service/HistoryService';
import { addFavorite } from '../../service/FavoriteService';


export default function SongScroller({songs, token, isHistory=false}) {
    console.log(token);
    console.log("[Inside DataScroller]: ",songs)
    const {user} = useAuth0();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(songs);
    console.log("[Inside DataScroller]: Data ",data)

    const deleteCallback = async (id) =>{
        setLoading(true);
        try {
            await deleteElementinHistoryBySongId(token, user.sub, id);
            setData(await getHistory(token, user.sub));
            setLoading(false);
        } catch(error) {
            console.log(error);
            setLoading(false);
        }
    }

    const favoriteCallback= async (link)=>{
        try{
            await addFavorite(token, user.sub, link);
            console.log("Favorite added");
        } catch(error){
            console.log(error);
        }
    };

    const songsTemplate = (data) => {
        const buttonCallback = async () => {
            setLoading(true);
            try {
                await downloadSongByYoutubeLink(token, user.sub, data.link);
                if(isHistory){
                    setData(await getHistory(token, user.sub));
                }
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }

        

        return (
            <div id="boxHistory">
                <div id="imageAndInfos">
                    <a href={data.link} target="blank">
                        <div id="imgHistoryBox">
                            <img id="imgHistory" src={`${data.thumbnail}`}/>
                        </div>
                    </a>
                    <div id="titleHistory">
                        <h1>{data.title}</h1>
                    </div>
                </div>
                <div id="boxButton">
                    <div id="boxButtonHistory">
                        <Button id="historyButtons" icon="pi pi-download" label="Scarica" severity="success" onClick={buttonCallback}></Button>
                    </div>
                    <div id="boxButtonDeleteHistory">
                        {!isHistory ? null : <Button id="historyButtons" icon="pi pi-trash" severity="danger" label="Elimina" onClick={() => {deleteCallback(data.songId)}}></Button>}
                    </div>
                    <div id="favorites">
                        <Button id="favoritesButton" icon="pi pi-star" rounded outlined severity="help" aria-label="Favorite" onClick={()=>favoriteCallback(data.link) } />       
                    </div>
                </div>
            </div>

        );
    };

    return (
        <>
            {loading && (
                <div className="spinner">
                    <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
                </div>
            )}
            <DataScroller value={data} itemTemplate={songsTemplate} rows={1000} inline scrollHeight="auto" emptyMessage="Nessun elemento trovato"/>
        </>
    )
}