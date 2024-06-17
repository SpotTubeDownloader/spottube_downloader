import React, {useState} from 'react'; 
import { Panel } from 'primereact/panel';
import SearchLabel from '../basicsComponent/SearchLabel';
import { ProgressSpinner } from 'primereact/progressspinner';
import { downloadSongByYoutubeLink } from '../../service/MusicService';
import { useAuth0 } from '@auth0/auth0-react';
import '../../css/spinner.css';
import '../../css/scroller.css';


export default function SelectMusicLink({ token }) {
    const {user} = useAuth0();
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(null);
    
    const callbackButton = async (token, value) => {
        setLoading(true);
        try {
            await downloadSongByYoutubeLink(token, user.sub, value);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }
    return (
        <>
            {loading && (
                <div className="spinner">
                    <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
                </div>
            )}
            <Panel header="Scarica attraverso il link" toggleable collapsed={true}>
                {!visible && <SearchLabel token={token} buttonIcon={"download"} callbackButton={callbackButton} />}
            </Panel>
        </>
    )
}
        