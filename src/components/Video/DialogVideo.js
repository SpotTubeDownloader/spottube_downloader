import React from "react";
import { Dialog } from 'primereact/dialog';
import FavoritesButton from "../Favorites/FavoritesButton";
import SelectVideoLink from "./SelectVideoLink";
import SelectVideoName from "./SelectVideoName";
import { Button } from "primereact/button"

export default function DialogVideo({ visible, position, onHide }) {

    return (
        <div className="card">
            <Dialog header="Download Video" visible={visible} position={position} style={{ width: '70vw' }} onHide={onHide} draggable={false} resizable={false} maximizable>
                <p className="m-0">
                    <p> Scarica il video che preferisci da Youtube semplicemente incollando il link qui sotto,
                        <br></br>
                        oppure cercandolo attraverso il nome
                    </p>
                    <SelectVideoLink />
                    <br></br>
                    <br></br>
                    <SelectVideoName />
                        <div id="favorites">
                            <FavoritesButton />
                        </div>
                </p>
            </Dialog>
        </div>
    )
}
