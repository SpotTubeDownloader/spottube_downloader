import React from "react";
import { Dialog } from 'primereact/dialog';
import SongScroller from '../basicsComponent/SongScroller';
import '../../css/dialogGeneral.css';
import '../../css/scroller.css';
import '../../css/responsive.css';

export default function DialogFavorites({ visible, position, onHide, token, favorite }) {
    return (
        <div className="card">
            <Dialog header="Preferiti" visible={visible} position={position} style={{ width: '60vw' }} onHide={onHide} draggable={false} resizable={false} maximizable>
                <p className="m-0">
                    <SongScroller songs={favorite} token={token} isFavorite={true} />
                </p>
            </Dialog>
        </div>
    )
}
        