import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

export default function SearchLabel({callbackButton, buttonIcon, labelText, token}) {
    const [value, setValue] = useState('');
    const icon = "pi pi-" + buttonIcon
    
    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputText id="element" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="element">{labelText}</label>
            </FloatLabel>
            <Button icon={icon} rounded outlined severity="success" aria-label="Search" onClick={() => callbackButton(token, value)} />
        </div>
    )
}
        
