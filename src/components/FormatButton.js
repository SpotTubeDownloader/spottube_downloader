import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';

export default function FormatButton() {
    const toast = useRef(null);
    const items = [
        {
            label: 'MP3',
            icon: (
                <img src="/mp3.png" alt="MP3 Icon" style={{ width: '100%', height: '100%' }} />
            ),
        },
        {
            label: 'M4A',
            icon: (
                <img src="/m4a.png" alt="M4A Icon" style={{ width: '100%', height: '100%' }} />
            ),
        },
        {
            label: 'WAV',
            icon: (
                <img src="wav.png" alt="WAV Icon" style={{ width: '100%', height: '100%' }} />
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
        