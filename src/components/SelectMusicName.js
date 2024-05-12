import React from 'react'; 
import { Panel } from 'primereact/panel';

export default function SelectMusicName() {
    return (
        <Panel header="Scarica attraverso il nome" toggleable collapsed={true}>
            <p className="m-0">
            <input type="text" id="linkMusic" placeholder="Inserisci il nome della canzone"/>
            </p>
        </Panel>
    )
}