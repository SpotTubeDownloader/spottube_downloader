import React from "react";
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import {downloadSongByYoutubeLink, } from '../../service/MusicService';
import {deleteElementinHistoryBySongId} from '../../service/HistoryService';
import { useAuth0 } from '@auth0/auth0-react';

export default function SongScroller({songs, token, isHistory=false}) {
    console.log(token);
    const {user} = useAuth0();
    const deleteCallback = (id) =>{
        deleteElementinHistoryBySongId(token, user.sub, id).then((data)=>{
            console.log(data);
            songs = data;
        }).catch((error)=>{
            console.log(error);
        });
    }

    const songsTemplate = (data) => {
        const buttonCallback = () => {
            downloadSongByYoutubeLink(token, user.sub ,data.link).then().catch((error)=>{
                console.log(error);
            });
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
                        {!isHistory ? null : <Button id="historyButtons" icon="pi pi-trash" severity="danger" label="Elimina" onClick={() =>deleteCallback(data.songId)}></Button>}
                    </div>
                </div>
            </div>

        );
    };

    return (
        <div className="card">
            <DataScroller value={songs} itemTemplate={songsTemplate} rows={1000} inline scrollHeight="auto" emptyMessage="Nessun elemento trovato"/>
        </div>
    )
}
        