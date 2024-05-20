import React from 'react'; 
import { Panel } from 'primereact/panel';
import ListBoxMusicFavorites from './ListBoxMusicFavorites';

export default function FavoritesBoxMusic() {
    return (
        <Panel header="Canzoni preferite scaricate:" toggleable collapsed={true}>
            <ListBoxMusicFavorites />
        </Panel>
    )
}
        