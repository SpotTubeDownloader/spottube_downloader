import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function ListBoxHistory() {
    const [selectedHistory, setSelectedHistory] = useState(null);
    const history = [
        
    ];

    return (
        <div className="card flex justify-content-center">  
            <ListBox filter value={selectedHistory} onChange={(e) => setSelectedHistory(e.value)} options={history} optionLabel="name" className="w-full md:w-14rem" />
        </div>
    )
}
        