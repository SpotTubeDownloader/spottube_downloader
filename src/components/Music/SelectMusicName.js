import React from 'react'; 
import { Panel } from 'primereact/panel';
import SearchLabel from '../basicsComponent/SearchLabel';
import SongScroller from '../basicsComponent/SongScroller';
import { getSongsList } from '../../service/MusicService';


export default function SelectMusicName({ token }) {
    const callbackButton = (token, value) => {
        getSongsList(token, value).then((data) => {
            console.log(data);
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <Panel header="Scarica attraverso il nome" toggleable collapsed={true}>
            <SearchLabel token={token} labelText={"Inserisci il nome della canzone"} buttonIcon={"search"} callbackButton={callbackButton} />
        </Panel>
    )
}