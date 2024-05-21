import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

export default function SearchLabel({callbackButton, buttonIcon, token}) {
    const [value, setValue] = useState('');
    const icon = "pi pi-" + buttonIcon
    
    return (
        <div className="search">
                <InputText id="element" value={value} onChange={(e) => setValue(e.target.value)} />
                <Button icon={icon} rounded outlined severity="success" aria-label="Search" onClick={() => callbackButton(token, value)} />
            
        </div>
    )
}
        
