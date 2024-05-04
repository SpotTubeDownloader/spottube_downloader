import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';

export default function FormatButtonVideo() {
    const toast = useRef(null);
    const items = [
        {
            label: 'MP4',
            icon: (
                <img src="/mp4.png" alt="MP4 Icon" style={{ width: '100%', height: '100%' }} />
            ),
        },
        {
            label: 'AVI',
            icon: (
                <img src="/avi.png" alt="AVI Icon" style={{ width: '100%', height: '100%' }} />
            ),
        },
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '80px' }}>
                <Toast ref={toast} />
                <SpeedDial model={items} direction="right" showIcon="pi pi-file-edit" style={{ top: 'calc(50% - 2rem)', left: 0 }} />
            </div>
        </div>
    )
}
        