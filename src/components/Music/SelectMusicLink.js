import React from 'react'; 
import { Panel } from 'primereact/panel';

export default function SelectMusicLink() {
    return (
        <Panel header="Scarica attraverso un link" toggleable collapsed={true}>
            <p className="m-0">
            <input type="text" id="linkMusic" placeholder="Inserisci il link Spotify/Youtube"/>
            </p>
        </Panel>
    )
}
        