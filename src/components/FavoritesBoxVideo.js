import React from 'react'; 
import { Panel } from 'primereact/panel';
import ListBoxVideoFavorites from './ListBoxVideoFavorites';

export default function FavoritesBoxVideo() {
    return (
        <Panel header="Video preferiti scaricati:" toggleable collapsed={true}>
            <ListBoxVideoFavorites />
        </Panel>
    )
}