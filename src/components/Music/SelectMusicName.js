import React from 'react'; 
import { Panel } from 'primereact/panel';
import SearchLabel from '../basicsComponent/SearchLabel';
import SongScroller from '../basicsComponent/SongScroller';
import { getSongsList } from '../../service/MusicService';
import { useState } from 'react';


export default function SelectMusicName({ token }) {
    const [visible, setVisible] = useState(false);
    const [songs, setSongs] = useState(null);
    
    const callbackButton = (token, value) => {
        getSongsList(token, value).then((data) => {
            console.log(data);
            setVisible(true);
            setSongs(data);
            console.log(data)
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <Panel header="Scarica attraverso il nome" toggleable collapsed={true}>
            {!visible && <SearchLabel token={token} labelText={"Inserisci il nome della canzone"} buttonIcon={"search"} callbackButton={callbackButton} />}
            {visible && songs !== null && <SongScroller songs={songs} />}
        </Panel>
    )
}