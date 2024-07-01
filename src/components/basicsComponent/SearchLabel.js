import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import '../../css/scroller.css';


export default function SearchLabel({callbackButton, buttonIcon, token}) {
    const [value, setValue] = useState('');
    const icon = "pi pi-" + buttonIcon

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            callbackButton(token, value);
        }
    };


    
    return (
        <div className="search">
                <InputText id="element" value={value} onChange={(e) => setValue(e.target.value)} onKeyPress={handleKeyPress} />
                <Button id="searchButton" icon={icon} rounded outlined severity="success" aria-label="Search" onClick={() => callbackButton(token, value)} /> 
        </div>
    )
}
        
