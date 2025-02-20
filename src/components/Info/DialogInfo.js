import React from "react";
import { Dialog } from 'primereact/dialog';
import RatingForm from "./Rating";
import '../../css/info.css';


export default function DialogInfo({ visible, position, onHide, token }) {
    
    return (
        <div className="card">
            <Dialog header="Info Generali" visible={visible} position={position} style={{ width: '60vw' }} onHide={onHide} draggable={false} resizable={false} maximizable>
                <p className="m-0">
                    Il progetto prende il nome di SpotTube. La sua funzionalità è quella di permettere il download di canzoni e/o video rispettivamente da Spotify e da Youtube.
                    <br></br>
                    <br></br>
                    Progetto sviluppato da: Umberto Francesco Carolini, Flavio Olivieri, Gabriele Santangelo e Erica Porcelli
                    <br></br>
                    <br></br>
                    Link Github: <a id="github" target="_blank" href="https://github.com/FrancescoUmberto/spottube_downloader.git">SpotTube Github</a>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    Valuta il nostro servizio se ti va: 
                    <RatingForm token={token}/>
                </p>
            </Dialog>
        </div>
    )
}
        