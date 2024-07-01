import React, { useState, useContext } from "react";
import { Menubar } from "primereact/menubar";
import DialogInfo from "../Info/DialogInfo.js";
import DialogMusic from "../Music/DialogMusic.js";
import DialogFavorites from "../Favorites/DialogFavorites.js";
import { useAuth0 } from "@auth0/auth0-react";
import DialogHistory from "../History/DialogHistory.js";
import { getHistory } from "../../service/HistoryService.js";
import { getFavorite } from "../../service/FavoriteService.js";
import "../../css/navbar.css";
import "../../css/dialogGeneral.css";
import { SongContext } from "../../context/SongContext.js";



export default function Navbar({token}) {
  const {dialogVisible, setDialogVisible} = useContext(SongContext);
  const [dialogType, setDialogType] = useState("");
  const [dialogPosition, setDialogPosition] = useState("center");
  const [history, setHistory] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const { logout, user } = useAuth0();

  const items = [
    {
      label: 'Musica',
      icon: "pi pi-headphones",
      command: () => {
        setDialogPosition("center");
        setDialogType("music");
        setDialogVisible(true);
      },
    },
    {
      label: 'Preferiti',
      icon: "pi pi-star",
      command: () => {
        setDialogPosition("center");
        setDialogType("favorites");
        try{
            getFavorite(token, user.sub).then(data=>{
                setFavorite(data);
                setDialogVisible(true);
            }).catch(err=>{
                console.log(err);
            });
        } catch(error){
            console.error("Error fetching favorite data:", error);
        }
      },
    },
    {
      label: 'Cronologia',
      icon: "pi pi-history",
      command: () => {
        setDialogPosition("center");
        setDialogType("history");
        try {
          getHistory(token, user.sub).then(data=>{
            setHistory(data);
            setDialogVisible(true);
          }).catch(err=>{
            console.log(err);
          })
        } catch (error) {
          console.error("Error fetching history data:", error);
        }
      },
    },
    {
      label: 'Info',
      icon: "pi pi-info-circle",
      command: () => {
        setDialogPosition("center");
        setDialogType("info");
        setDialogVisible(true);
      },
    },
    {
      label: 'Logout',
      icon: "pi pi-sign-out",
      command: () => {
        logout({
          logoutParams: {
            returnTo: window.location.origin,
          },
        });
      },
    },
  ];

  const start = user ? (
    <img alt="User" src={user.picture} className="mr-2"></img>
  ) : (
    <img alt="logo" src="/public/logo2.png" height="100" className="mr-2"></img>
  );

  return (
    <div className="card">
      <Menubar model={items} start={start} />
      {dialogVisible && dialogType === "music" && (
        <DialogMusic
          visible={dialogVisible}
          position={dialogPosition}
          onHide={() => setDialogVisible(false)}
          token={token}
          setDialogVisible={setDialogVisible}
        />
      )}
      {dialogVisible && dialogType === "favorites" && (
        <DialogFavorites
          visible={dialogVisible}
          position={dialogPosition}
          onHide={() => setDialogVisible(false)}
          favorite={favorite}
          token={token}
          setDialogVisible={setDialogVisible}
        />
      )}
      {dialogVisible && dialogType === "history" &&(
        <DialogHistory
          visible={dialogVisible}
          position={dialogPosition}
          onHide={() => setDialogVisible(false)}
          history={history}
          token={token}
          setDialogVisible={setDialogVisible}
        />
      )}
      {dialogVisible && dialogType === "info" && (
        <DialogInfo
          visible={dialogVisible}
          position={dialogPosition}
          onHide={() => setDialogVisible(false)}
          token={token}
        />
      )}
    </div>
  );
}
