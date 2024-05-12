import React from 'react'; 
import { Button } from 'primereact/button';

export default function IconOnlyDemo() {
    return (
        <div>  
            <Button id="favoritesButton" icon="pi pi-star" rounded outlined severity="help" aria-label="Favorite" />       
        </div>
        
    )
}
        