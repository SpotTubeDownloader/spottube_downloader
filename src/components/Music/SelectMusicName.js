import React from 'react'; 
import { Panel } from 'primereact/panel';
import SearchLabel from '../basicsComponent/SearchLabel';
import SongScroller from '../basicsComponent/SongScroller';
import { getSongsList } from '../../service/MusicService';
import { useState } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import '../../css/spinner.css';
import '../../css/scroller.css';



export default function SelectMusicName({ token, setDialogVisible}) {
    const [visible, setVisible] = useState(false);
    const [songs, setSongs] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const callbackButton = async (token, value) => {
        setLoading(true);
        try {
            getSongsList(token, value).then((data) => {
                console.log(data);
                setVisible(true);
                setSongs(data);
                console.log(data);
                setLoading(false);
            }).catch((error) => {
                console.log(error);
                setLoading(false);
            });
        } catch(error) {
            console.log(error);
            setLoading(false);
        }
        
    }

    return (
        <>
            {loading && <div className="spinner">
                    <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
                </div>
            }
            <Panel header="Scarica attraverso il nome" toggleable collapsed={true}>
                {!visible && <SearchLabel token={token} buttonIcon={"search"} callbackButton={callbackButton} />}
                {visible && songs !== null && <SongScroller songs={songs} token={token} setDialogVisible={setDialogVisible}/>}
            </Panel>
        </>
    )
}