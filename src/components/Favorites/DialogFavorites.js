import React from "react";
import { Dialog } from 'primereact/dialog';
import SongScroller from '../basicsComponent/SongScroller';
import { useState } from 'react';

export default function DialogFavorites({ visible, position, onHide, token, favorite }) {
    return (
        <div className="card">
            <Dialog header="Preferiti" visible={visible} position={position} style={{ width: '70vw' }} onHide={onHide} draggable={false} resizable={false} maximizable>
                <p className="m-0">
                    <SongScroller songs={favorite} token={token}/>
                </p>
            </Dialog>
        </div>
    )
}
        