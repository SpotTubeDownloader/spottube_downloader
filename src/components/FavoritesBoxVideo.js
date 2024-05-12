import React from 'react'; 
import { Panel } from 'primereact/panel';
import ListBoxVideo from './ListBoxVideo';

export default function FavoritesBoxVideo() {
    return (
        <Panel header="Video preferiti scaricati:" toggleable collapsed={true}>
            <ListBoxVideo />
        </Panel>
    )
}