import React from "react";
import { Dialog } from 'primereact/dialog';
import FormatButtonVideo from "./FormatButtonVideo";
import FavoritesButton from "./FavoritesButton";

export default function DialogVideo({ visible, position, onHide }) {
    
    return (
        <div className="card">
            <Dialog header="Download Video" visible={visible} position={position} style={{ width: '70vw' }} onHide={onHide} draggable={false} resizable={false}>
                <p className="m-0">
                    <p> Scarica il video che preferisci da Youtube semplicemente incollando il link qui sotto.
                        <br></br>
                        Seleziona il formato e premi su "Scarica"
                    </p>
                    <input type="text" id="linkMusic" placeholder="Inserisci il link Youtube"/>
                    <FormatButtonVideo />
                    <button className="download_audio">Scarica</button>
                    <FavoritesButton />
                </p>
            </Dialog>
        </div>
    )
}
        