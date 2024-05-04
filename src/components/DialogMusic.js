import React from "react";
import { Dialog } from 'primereact/dialog';

export default function DialogMusic({ visible, position, onHide }) {
    
    return (
        <div className="card">
            <Dialog header="Download Musica" visible={visible} position={position} style={{ width: '70vw' }} onHide={onHide} draggable={false} resizable={false}>
                <p className="m-0">
                    
                </p>
            </Dialog>
        </div>
    )
}
        