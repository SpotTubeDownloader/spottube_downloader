import React from "react";
import { Dialog } from 'primereact/dialog';

export default function DialogInfo({ visible, position, onHide }) {
    
    return (
        <div className="card">
            <Dialog header="Info Generali" visible={visible} position={position} style={{ width: '70vw' }} onHide={onHide} draggable={false} resizable={false}>
                <p className="m-0">
                    Il progetto prende il nome di SpotTube. La sua funzionalità è quella di permettere il download di canzoni e/o video rispettivamente da Spotify e da Youtube.
                    <br></br>
                    <br></br>
                    Progetto sviluppato da: Umberto Carolini, Flavio Olivieri e Gabriele Santangelo
                    <br></br>
                    <br></br>
                    Link Github:
                </p>
            </Dialog>
        </div>
    )
}
        