import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Badge } from 'primereact/badge';

export default function Navbar() {
    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    const items = [
        {
            label: 'Info',
            icon: 'pi pi-info-circle'
        },
        {
            label: 'Musica',
            icon: 'pi pi-headphones'
        },
        {
            label: 'Video',
            icon: 'pi pi-video',
            
        }, 
    ];

    const start = <img alt="logo" src="/logo.png" height="80" className="mr-2"></img>;

    return (
        <div className="card">
            <Menubar model={items} start={start} className="vertical-navbar"/>
        </div>
    )
}
        