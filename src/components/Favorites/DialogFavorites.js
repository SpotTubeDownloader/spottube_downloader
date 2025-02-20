import React from "react";
import { Dialog } from 'primereact/dialog';
import SongScroller from '../basicsComponent/SongScroller';
import '../../css/dialogGeneral.css';
import '../../css/scroller.css';


export default function DialogFavorites({ visible, position, onHide, token, favorite, setPlayer, setDialogVisible }) {
    return (
        <div className="card">
            <Dialog header="Preferiti" visible={visible} position={position} style={{ width: '60vw' }} onHide={onHide} draggable={false} resizable={false} maximizable>
                <p className="m-0">
                    <SongScroller songs={favorite} token={token} isFavorite={true} setPlayer={setPlayer} setDialogVisible={setDialogVisible}/>
                </p>
            </Dialog>
        </div>
    )
}
        