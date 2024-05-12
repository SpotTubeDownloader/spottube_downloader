import React from 'react'; 
import { Panel } from 'primereact/panel';
import ListBoxMusic from './ListBoxMusic';

export default function FavoritesBoxMusic() {
    return (
        <Panel header="Canzoni preferite scaricate:" toggleable collapsed={true}>
            <ListBoxMusic />
        </Panel>
    )
}
        