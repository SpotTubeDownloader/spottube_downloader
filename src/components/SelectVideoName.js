import React from 'react'; 
import { Panel } from 'primereact/panel';
import NameCompleteVideo from './NameCompleteVideo';

export default function SelectVideoName() {
    return (
        <Panel header="Scarica attraverso il nome" toggleable collapsed={true}>
            <NameCompleteVideo />
        </Panel>
    )
}