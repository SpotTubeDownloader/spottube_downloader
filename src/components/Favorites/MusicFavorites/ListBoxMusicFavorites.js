import React from "react";
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';

export default function ListBoxMusicFavorites({favoritesMusic}) {
    console.log(favoritesMusic);

    const songsTemplate = (data) => {
        return (
            <div>
                <div id="boxHistory">
                    <img id="imgHistory" src={`${data.song.thumbnail}`}/>
                    <div>
                        <div id="boxtitlelink">
                            <div>
                                <div id="titleHistory">{data.song.title}</div>
                                <br></br>
                                <div><a href={data.song.link} target="blank">Apri su Youtube</a></div>
                                <br></br>
                            </div>
                        </div>
                        <div id="boxButtonHistory">
                            <Button id="buttonHistory" icon="pi pi-download" label="Scarica" disabled={data.song.name === 'MILLE'}></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <DataScroller value={favoritesMusic} itemTemplate={songsTemplate} rows={10} inline scrollHeight="500px" emptyMessage="Nessun elemento trovato"/>
        </div>
    )
}
        
        