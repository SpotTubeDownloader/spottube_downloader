import React, { useEffect, useState } from 'react';
import { AutoComplete } from "primereact/autocomplete";
import { VideoService } from "../service/VideoService";

export default function NameCompleteVideo() {
    const [video, setVideo] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [filteredVideo, setFilteredVideo] = useState(null);

    const search = (event) => {
        // Timeout to emulate a network connection
        setTimeout(() => {
            let _filteredVideo;

            if (!event.query.trim().length) {
                _filteredVideo = [...video];
            }
            else {
                _filteredVideo = video.filter((video) => {
                    return video.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredVideo(_filteredVideo);
        }, 250);
    }

    useEffect(() => {
        VideoService.getVideo().then((data) => setVideo(data));
    }, []);

    const itemTemplate = (item) => {
        return (
            <div className="p-clearfix" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>{item.name}</div>
                {item.image && (
                    <img id="imgvideo" src={item.image} alt={item.name} style={{ width: '80px', height: '50px', objectFit: 'cover' }} />
                )}
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <AutoComplete field="name" value={selectedVideo} placeholder="Inserisci il nome del video" suggestions={filteredVideo} completeMethod={search} onChange={(e) => setSelectedVideo(e.value)} itemTemplate={itemTemplate} />
        </div>
    )
}
        