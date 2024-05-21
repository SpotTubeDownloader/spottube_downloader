import React from "react";
import { Dialog } from 'primereact/dialog';
import FavoritesBoxMusic from "./MusicFavorites/FavoritesBoxMusic";
import FavoritesBoxVideo from "./VideoFavorites/FavoritesBoxVideo";

export default function DialogFavorites({ visible, position, onHide }) {
    
    return (
        <div className="card">
            <Dialog header="Preferiti" visible={visible} position={position} style={{ width: '70vw' }} onHide={onHide} draggable={false} resizable={false} maximizable>
                <p className="m-0">
                    <FavoritesBoxMusic />
                    <br></br>
                    <br></br>
                    <FavoritesBoxVideo />
                </p>
            </Dialog>
        </div>
    )
}
        