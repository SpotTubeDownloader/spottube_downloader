import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function ListBoxVideo() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const videos = [
        { name: 'Se domani non torno distruggi tutto', code: 'Flavio e Sofia' },
        { name: 'Il caso del piccione spia arrestato', code: 'BarbascuraX' },
        { name: 'La caduta della fetta di pane', code: 'Viral Lab' },
        { name: 'Limiti - Definizione di Limite di una Funzione', code: 'Elia Bombardelli' },
        { name: 'ACM MMSys 24 closing session', code: 'MMSys' }
    ];

    return (
        <div className="card flex justify-content-center">  
            <ListBox filter value={selectedVideo} onChange={(e) => setSelectedVideo(e.value)} options={videos} optionLabel="name" className="w-full md:w-14rem" />
        </div>
    )
}
        