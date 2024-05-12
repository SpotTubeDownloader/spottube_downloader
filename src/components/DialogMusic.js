import React from "react";
import { Dialog } from 'primereact/dialog';
import FormatButton from "./FormatButton";
import FavoritesButton from "./FavoritesButton";
import SelectMusicLink from "./SelectMusicLink";
import SelectMusicName from "./SelectMusicName";

export default function DialogMusic({ visible, position, onHide }) {
    
    return (
        <div className="card">
            <Dialog header="Download Musica" visible={visible} position={position} style={{ width: '70vw' }} onHide={onHide} draggable={false} resizable={false}>
                <p className="m-0">
                    <p> Scarica la canzone che preferisci da Spotify o da Youtube semplicemente incollando il link qui sotto.
                        <br></br>
                        Seleziona il formato e premi su "Scarica"
                    </p>
                    <SelectMusicLink />
                    <br></br>
                    <br></br>
                    <SelectMusicName />
                    <FormatButton />
                    <button className="download_audio">Scarica</button>
                    <FavoritesButton />
                </p>
            </Dialog>
        </div>
    )
}
        