import React, {useState} from 'react';
import { Menubar } from 'primereact/menubar';
import DialogInfo from './DialogInfo';
import DialogMusic from './DialogMusic';
import DialogVideo from './DialogVideo';
import DialogFavorites from './DialogFavorites';

export default function Navbar() {
    const [dialogVisible, setDialogVisible] = useState(false);
    const [dialogType, setDialogType] = useState(''); 
    const [dialogPosition, setDialogPosition] = useState('center');
    
    const items = [
        {
            //label: 'Musica',
            icon: 'pi pi-headphones',
            command: () => {
                setDialogPosition('right');
                setDialogType('music');
                setDialogVisible(true);
            }
        },
        {
            //label: 'Video',
            icon: 'pi pi-video',
            command: () => {
                setDialogPosition('right');
                setDialogType('video');
                setDialogVisible(true);
            }
        }, 
        {
            //label: 'Preferiti',
            icon: 'pi pi-star',
            command: () => {
                setDialogPosition('right');
                setDialogType('favorites');
                setDialogVisible(true);
            }
        },
        {
            //label: 'Info',
            icon: 'pi pi-info-circle',
            command: () => {
                setDialogPosition('right');
                setDialogType('info');
                setDialogVisible(true);
            }
        },
    ];

    const start = <img alt="logo" src="/logo.png" height="100" className="mr-2"></img>;

    return (
        <div className="card">
            <Menubar model={items} start={start} className="vertical-navbar"/>
            {dialogVisible && dialogType === 'music' && <DialogMusic visible={dialogVisible} position={dialogPosition} onHide={() => setDialogVisible(false)} />}
            {dialogVisible && dialogType === 'video' && <DialogVideo visible={dialogVisible} position={dialogPosition} onHide={() => setDialogVisible(false)} />}
            {dialogVisible && dialogType === 'favorites' && <DialogFavorites visible={dialogVisible} position={dialogPosition} onHide={() => setDialogVisible(false)} />}
            {dialogVisible && dialogType === 'info' && <DialogInfo visible={dialogVisible} position={dialogPosition} onHide={() => setDialogVisible(false)} />}
        </div>
    )
}
        