import React from "react";
import { Dialog } from 'primereact/dialog';
import ListBoxHistory from './ListBoxHistory';

export default function DialogHistory({ visible, position, onHide }) {
    
    return (
        <div className="card">
            <Dialog header="Cronologia" visible={visible} position={position} style={{ width: '70vw' }} onHide={onHide} draggable={false} resizable={false}>
                <p className="m-0">
                    <ListBoxHistory />
                </p>
            </Dialog>
        </div>
    )
}
        