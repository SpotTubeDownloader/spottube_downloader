import React from "react";
import { Dialog } from 'primereact/dialog';
import FavoritesButton from "../Favorites/FavoritesButton";
import SelectMusicLink from "./SelectMusicLink";
import SelectMusicName from "./SelectMusicName";

export default function DialogMusic({ visible, position, onHide, token }) {
    console.log("[DialogMusic] token: ", token)
    return (
        <div className="card">
            <Dialog header="Download Musica" visible={visible} position={position} style={{ width: '70vw' }} onHide={onHide} draggable={false} resizable={false} maximizable>
                <p className="m-0">
                    <p> Scarica la canzone che preferisci da Spotify o da Youtube semplicemente incollando il link qui sotto,
                        <br></br>
                        oppure cercandola attraverso il nome
                    </p>
                    <SelectMusicLink />
                    <br></br>
                    <br></br>
                    <SelectMusicName token = {token}/>
                    <div id="pulsanti">
                        <div id="favorites">
                            <FavoritesButton />
                        </div>
                    </div>
                </p>
            </Dialog>
        </div>
    )
}

// import React, { useState } from "react";
// import { Dialog } from 'primereact/dialog';
// import FavoritesButton from "../Favorites/FavoritesButton";
// import SelectMusicLink from "./SelectMusicLink";
// import SelectMusicName from "./SelectMusicName";
// import { Button } from "primereact/button"
// import axios from 'axios';
// import { saveAs } from 'file-saver';
// import { useAuth0 } from '@auth0/auth0-react';

// export default function DialogMusic({ visible, position, onHide, token }) {
//     const [musicLink, setMusicLink] = useState(null);
//     const {user} = useAuth0();

//     const handleSelectMusicLink = (link) => {
//         setMusicLink(link);
//     };

//     const handleDownload = () => {
//         if (musicLink) {
//             const api_url = process.env.REACT_APP_API_URL;
//             axios.post(`${api_url}/user/downloadSongBySongName`,{
//                 songLink: musicLink,
//                 sub: user.sub
//             },{
//                 headers:{
//                     'Content-Type': 'application/json',
//                     'authorization': `Bearer ${token}`,
//                 }, responseType: 'blob'
//             }).then((response) => {
//                 const songName = response.headers['songname'];
//                 const blob = new Blob([response.data], { type: 'audio/mpeg' });
//                 saveAs(blob, `${songName}.mp3`);

//             }).catch((err) => {
//                 console.log(err);
//             });
//         }
//     };

//     return (
//         <div className="card">
//             <Dialog header="Download Musica" visible={visible} position={position} style={{ width: '70vw' }} onHide={onHide} draggable={false} resizable={false} maximizable>
//                 <p className="m-0">
//                     <p> Scarica la canzone che preferisci da Spotify o da Youtube semplicemente incollando il link qui sotto,
//                         <br></br>
//                         oppure cercandola attraverso il nome
//                     </p>
//                     <SelectMusicLink />
//                     <br></br>
//                     <br></br>
//                     <SelectMusicName onSelectMusicLink={handleSelectMusicLink} />
//                     <div id="pulsanti">
//                         <div id="downloadDiv">
//                             <Button className="download_audio" label="Scarica" onClick={handleDownload}></Button> 
//                         </div>
//                         <div id="favorites">
//                             <FavoritesButton />
//                         </div>
//                     </div>
//                 </p>
//             </Dialog>
//         </div>
//     )
// }



        
        