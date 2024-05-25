import React, {useState} from "react";
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import {downloadSongByYoutubeLink, } from '../../service/MusicService';
import {deleteElementinHistoryBySongId} from '../../service/HistoryService';
import { useAuth0 } from '@auth0/auth0-react';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function SongScroller({songs, token, isHistory=false}) {
    const {user} = useAuth0();
    const [loading, setLoading] = useState(false);

    const deleteCallback = (id) =>{
        deleteElementinHistoryBySongId(token, user.sub, id).then((data)=>{
            songs = data;
        }).catch((error)=>{
            console.log(error);
        });
    }

    const songsTemplate = (data) => {
        const buttonCallback = async () => {
            setLoading(true);
            try {
                await downloadSongByYoutubeLink(token, user.sub, data.link);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }
        return (
            <div id="boxHistory">
                <div id="imageAndInfos">
                    <div id="imgHistoryBox">
                        <img id="imgHistory" src={`${data.thumbnail}`}/>
                    </div>
                    <div id="titleHistory">
                        <h1>{data.title}</h1>
                    </div>
                </div>
                <div id="boxButton">
                    <div id="boxButtonHistory">
                        <Button id="historyButtons" icon="pi pi-download" label="Scarica" severity="success" onClick={buttonCallback}></Button>
                    </div>
                    <div>
                        <a href={data.link} target="blank"><p>Apri su Youtube</p></a>
                    </div>
                    <div id="boxButtonDeleteHistory">
                        {!isHistory ? null : <Button id="historyButtons" icon="pi pi-trash" severity="danger" label="Elimina" onClick={() =>deleteCallback(data.id)}></Button>}
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
            <DataScroller value={songs} itemTemplate={songsTemplate} rows={1000} inline scrollHeight="auto" emptyMessage="Nessun elemento trovato"/>
        </>
    )
}
        