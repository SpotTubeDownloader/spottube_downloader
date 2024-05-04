import React from "react";
import { Dialog } from 'primereact/dialog';

export default function DialogVideo({ visible, position, onHide }) {
    
    return (
        <div className="card">
            <Dialog header="Download Video" visible={visible} position={position} style={{ width: '70vw' }} onHide={onHide} draggable={false} resizable={false}>
                
            </Dialog>
        </div>
    )
}
        