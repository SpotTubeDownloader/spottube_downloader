import React from "react";
import { Dialog } from 'primereact/dialog';
import ListBoxMusic from './ListBoxMusic';
import ListBoxVideo from "./ListBoxVideo";

export default function DialogFavorites({ visible, position, onHide }) {
    
    return (
        <div className="card">
            <Dialog header="Preferiti" visible={visible} position={position} style={{ width: '70vw' }} onHide={onHide} draggable={false} resizable={false}>
                <p className="m-0">
                    <p>Canzoni preferite scaricate:</p>
                    <ListBoxMusic />
                    <br></br>
                    <p>Video preferiti scaricati:</p>
                    <ListBoxVideo />
                </p>
            </Dialog>
        </div>
    )
}
        