import React from 'react'; 
import { Panel } from 'primereact/panel';
import NameCompleteMusic from './NameCompleteMusic';

export default function SelectMusicName() {
    return (
        <Panel header="Scarica attraverso il nome" toggleable collapsed={true}>
            <NameCompleteMusic />
        </Panel>
    )
}