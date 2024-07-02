import LoginButton from "../components/basicsComponent/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import "../css/login.css";

function Login() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  });

  return (
    <div className="Login">
      <div className="InfoBox">
        <div className="LogoImage">
          <img src="/logo2.png"></img>
        </div>
        <h1>SpotTube Downloader</h1>
      </div>
      <header className="Login-header">
        <div className="box">
          <div className="description">
            <h2>
              Benvenuto su SpotTube Downloader, il sito ideale per scaricare la
              tua musica preferita da YouTube e Spotify in pochi semplici passi!
            </h2>
            <ul>
              <li>
                <p>
                  <strong>Scaricare Musica:</strong> Basta inserire il link o il nome del brano
                  che desideri e avrai la tua musica preferita sempre
                  disponibile
                </p>
              </li>
              <li>
                <p>
                  <strong>Preferiti:</strong> Salva i tuoi brani preferiti per accedervi
                  facilmente in qualsiasi momento
                </p>
              </li>
              <li>
                <p>
                  <strong>Cronologia:</strong> Tieni traccia dei tuoi download con la nostra
                  funzionalità di cronologia, per non perdere mai un brano
                </p>
              </li>
              <li>
                <p>
                <strong>Riproduzione Musica:</strong> Ascolta i tuoi brani direttamente dal
                  nostro sito con il nostro player integrato
                </p>
              </li>
            </ul>
          </div>
          <div className="App">
            <LoginButton />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;
