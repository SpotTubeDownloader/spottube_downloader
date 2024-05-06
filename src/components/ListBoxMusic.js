import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function ListBoxMusic() {
    const [selectedMusic, setSelectedMusic] = useState(null);
    const musics = [
        { name: 'China Town', code: 'Caparezza' },
        { name: 'Flavio', code: 'Gazzelle' },
        { name: 'Domani Smetto', code: 'Articolo 31' },
        { name: 'Gaetano', code: 'Calcutta' },
        { name: 'A testa in giù', code: 'Naska' }
    ];

    return (
        <div className="card flex justify-content-center">  
            <ListBox filter value={selectedMusic} onChange={(e) => setSelectedMusic(e.value)} options={musics} optionLabel="name" className="w-full md:w-14rem" />
        </div>
    )
}
        