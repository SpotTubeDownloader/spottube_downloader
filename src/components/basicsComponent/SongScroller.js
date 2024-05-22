import React from "react";
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import {downloadSongByYoutubeLink} from '../../service/MusicService';
import { useAuth0 } from '@auth0/auth0-react';

export default function SongScroller({songs, token}) {
    const {user} = useAuth0();

    const songsTemplate = (data) => {
        const buttonCallback = () => {
            downloadSongByYoutubeLink(token, user.sub ,data.link).then().catch((error)=>{
                console.log(error);
            });
        }
        return (
            <div>
                <div id="boxHistory">
                    <img id="imgHistory" src={`${data.thumbnail}`}/>
                    <div>
                        <div id="boxtitlelink">
                            <div>
                                <div id="titleHistory">{data.title}</div>
                                <br></br>
                                <div><a href={data.link} target="blank">Apri su Youtube</a></div>
                                <br></br>
                            </div>
                        </div>
                        <div id="boxButtonHistory">
                            <Button id="buttonHistory" icon="pi pi-download" label="Scarica" onClick={buttonCallback}></Button>
                        </div>
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
        