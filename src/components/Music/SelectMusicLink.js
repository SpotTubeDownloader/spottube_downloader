// import React from 'react'; 
// import { Panel } from 'primereact/panel';

// export default function SelectMusicLink() {
//     return (
//         <Panel header="Scarica attraverso un link" toggleable collapsed={true}>
//             <p className="m-0">
//             <input type="text" id="linkMusic" placeholder="Inserisci il link Spotify/Youtube"/>
//             </p>
//         </Panel>
//     )
// }

import React from 'react'; 
import { Panel } from 'primereact/panel';
import SearchLabel from '../basicsComponent/SearchLabel';
import SongScroller from '../basicsComponent/SongScroller';
import { getSongsList } from '../../service/MusicService';
import { useState } from 'react';
import { downloadSongByYoutubeLink } from '../../service/MusicService';
import { useAuth0 } from '@auth0/auth0-react';



export default function SelectMusicLink({ token }) {
    const {user} = useAuth0();
    const [visible, setVisible] = useState(false);
    const [songs, setSongs] = useState(null);
    
    const callbackButton = (token, value) => {
            downloadSongByYoutubeLink(token, user.sub ,value).then().catch((error)=>{
                console.log(error);
            });
    }
    return (
        <Panel header="Scarica attraverso il link" toggleable collapsed={true}>
            {!visible && <SearchLabel token={token} buttonIcon={"download"} callbackButton={callbackButton} />}
        </Panel>
    )
}
        