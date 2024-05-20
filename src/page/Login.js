import LoginButton from '../components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';



function Login() {
    const api_url = process.env.REACT_APP_API_URL;
    const {isAuthenticated, user, logout,getAccessTokenSilently} = useAuth0();
    const navigate = useNavigate();
    if(isAuthenticated){
        getAccessTokenSilently().then((token) => {
            axios.post(`${api_url}/login`, {
                email: user.email,
                name: user.name,
                picture: user.picture,
                nickname: user.nickname,
                sub: user.sub
            },{
                headers:{
                    authorization: `Bearer ${token}`,
                }
            }).then((response) => {
                console.log(response.data);
            }).catch((err) => {
                logout();
            });

                axios.post(`${api_url}/user/saerchName`,{
                    songName: "Mille giorni di te e di me"
                },{
                    headers:{
                        authorization: `Bearer ${token}`,
                    }
                }).then((response) => {

                    import('../service/MusicService').then(({ MusicService }) => {
                        MusicService.setMusicData(response.data);
                    });
                }).catch((err) => {
                    console.log(err);
                });

                axios.post(`${api_url}/user/downloadSongBySongName`,{
                    songLink: "https://www.youtube.com/watch?v=WIsXSKqDdeE",
                    sub: user.sub
                },{
                    headers:{
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${token}`,
                    }, responseType: 'blob'
                }).then((response) => {
                    const songName = response.headers['songname'];
                    const blob = new Blob([response.data], { type: 'audio/mpeg' });
                    saveAs(blob, `${songName}.mp3`);

                }).catch((err) => {
                    console.log(err);
                });
            }
            )

    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/home');
        }
      });

  return (
    <div className='Login'>
        <header className='Login-header'>
            <div className='App'>
                <LoginButton />
            </div>
        </header>
    </div>
  );
}

export default Login;
