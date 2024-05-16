import React, { useEffect, useState } from 'react';
import { AutoComplete } from "primereact/autocomplete";
import { MusicService } from '../service/MusicService.js';

export default function NameCompleteMusic() {
    const [music, setMusic] = useState([]);
    const [selectedMusic, setSelectedMusic] = useState(null);
    const [filteredMusic, setFilteredMusic] = useState(null);

    const search = (event) => {
        // Timeout to emulate a network connection
        setTimeout(() => {
            let _filteredMusic;

            if (!event.query.trim().length) {
                _filteredMusic = [...music];
            }
            else {
                _filteredMusic = music.filter((music) => {
                    return music.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredMusic(_filteredMusic);
        }, 250);
    }

    useEffect(() => {
        MusicService.getMusic().then((data) => setMusic(data));
    }, []);

    const itemTemplate = (item) => {
        return (
            <div className="p-clearfix" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>{item.name}</div>
                {item.image && (
                    <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                )}
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <AutoComplete field="name" value={selectedMusic} placeholder="Inserisci il nome della canzone" suggestions={filteredMusic} completeMethod={search} onChange={(e) => setSelectedMusic(e.value)} itemTemplate={itemTemplate} />
        </div>
    )
}
        