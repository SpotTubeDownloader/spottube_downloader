import React from "react";
import { Dialog } from 'primereact/dialog';
import FavoritesButton from "../Favorites/FavoritesButton";
import SelectMusicLink from "./SelectMusicLink";
import SelectMusicName from "./SelectMusicName";
import { Button } from "primereact/button"

export default function DialogMusic({ visible, position, onHide }) {
    
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
                    <SelectMusicName />
                    <div id="pulsanti">
                        <div id="downloadDiv">
                            <Button className="download_audio" label="Scarica"></Button> 
                        </div>
                        <div id="favorites">
                            <FavoritesButton />
                        </div>
                    </div>
                </p>
            </Dialog>
        </div>
    )
}


        
        