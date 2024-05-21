import React from "react";
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';

export default function SongScroller({songs}) {

    const songsTemplate = (data) => {
        console.log(data);
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
                            <Button id="buttonHistory" icon="pi pi-download" label="Scarica"></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <DataScroller value={songs} itemTemplate={songsTemplate} rows={10} inline scrollHeight="auto" emptyMessage="Nessun elemento trovato"/>
        </div>
    )
}
        