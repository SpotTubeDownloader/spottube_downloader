import React from "react";
import { Dialog } from 'primereact/dialog';
import SelectMusicLink from "./SelectMusicLink";
import SelectMusicName from "./SelectMusicName";
import '../../css/dialogGeneral.css';

export default function DialogMusic({ visible, position, onHide, token }) {
    console.log("[DialogMusic] token: ", token)
    return (
        <div className="card">
            <Dialog header="Download Musica" visible={visible} position={position} style={{ width: '60vw' }} onHide={onHide} draggable={false} resizable={false} maximizable>
                <p className="m-0">
                    <p> Scarica la canzone che preferisci da Spotify o da Youtube semplicemente incollando il link qui sotto,
                        <br></br>
                        oppure cercandola attraverso il nome
                    </p>
                    <SelectMusicLink token = {token} />
                    <br></br>
                    <br></br>
                    <SelectMusicName token = {token}/>
                </p>
            </Dialog>
        </div>
    )
}