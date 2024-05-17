import LoginButton from '../components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';


function Login() {
    const {isAuthenticated, user, logout,getAccessTokenSilently} = useAuth0();
    const navigate = useNavigate();
    if(isAuthenticated){
        getAccessTokenSilently().then((token) => {
            axios.post('http://10.33.6.112:9000/login', {
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

                axios.post("http://10.33.6.112:9000/user/saerchName",{
                    songName: "Mille giorni di te e di me"
                },{
                    headers:{
                        authorization: `Bearer ${token}`,
                    }
                }).then((response) => {
                    console.log(response.data);
                    import('../service/MusicService').then(({ MusicService }) => {
                        MusicService.setMusicData(response.data);
                    });
                }).catch((err) => {
                    console.log(err);
                });

                axios.post("http://10.33.6.112:9000/user/downloadSongBySongName",{
                    songLink: "https://www.youtube.com/watch?v=WIsXSKqDdeE"
                },{
                    headers:{
                        authorization: `Bearer ${token}`,
                    }, responseType: 'blob'
                }).then((response) => {
                    const blob = new Blob([response.data], {type: 'audio/mpeg'});
                    const header = response.headers;
                    console.log(response)
                    saveAs(blob, "Mille giorni di te e di me.mp3");
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
