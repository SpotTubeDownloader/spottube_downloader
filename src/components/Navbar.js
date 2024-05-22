import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import DialogInfo from "./Info/DialogInfo.js";
import DialogMusic from "./Music/DialogMusic";
import DialogVideo from "./Video/DialogVideo";
import DialogFavorites from "./Favorites/DialogFavorites";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import DialogHistory from "./History/DialogHistory";
import { getHistory } from "../service/HistoryService";
//take api url from .env file
const apiUrl = process.env.REACT_APP_API_URL;

export default function Navbar({ token }) {
    console.log("[Navbar] token: ", token)
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [dialogPosition, setDialogPosition] = useState("center");
  const [history, setHistory] = useState([]);
  const { logout, user } = useAuth0();
  const navigate = useNavigate();

  const items = [
    {
      //label: 'Musica',
      icon: "pi pi-headphones",
      command: () => {
        setDialogPosition("right");
        setDialogType("music");
        setDialogVisible(true);
      },
    },
    {
      //label: 'Video',
      icon: "pi pi-video",
      command: () => {
        setDialogPosition("right");
        setDialogType("video");
        setDialogVisible(true);
      },
    },
    {
      //label: 'Preferiti',
      icon: "pi pi-star",
      command: () => {
        setDialogPosition("right");
        setDialogType("favorites");
        setDialogVisible(true);
      },
    },
    {
      //label: 'Cronologia',
      icon: "pi pi-history",
      command: () => {
        setDialogPosition("right");
        setDialogType("history");
        setDialogVisible(true);
        try {
          getHistory(token, user.sub).then(data=>{
            console.log(data);
            setHistory(data);
          }).catch(err=>{
            console.log(err);
          })
        } catch (error) {
          console.error("Error fetching history data:", error);
        }
      },
    },
    {
      //label: 'Info',
      icon: "pi pi-info-circle",
      command: () => {
        setDialogPosition("right");
        setDialogType("info");
        setDialogVisible(true);
      },
    },
    {
      icon: "pi pi-sign-out",
      command: () => {
        logout();
        navigate("/");
      },
    },
  ];

  const start = user ? (
    <img alt="User" src={user.picture} className="mr-2"></img>
  ) : (
    <img alt="logo" src="/logo.png" height="100" className="mr-2"></img>
  );

  return (
    <div className="card">
      <Menubar model={items} start={start} className="vertical-navbar" />
      {dialogVisible && dialogType === "music" && (
        <DialogMusic
          visible={dialogVisible}
          position={dialogPosition}
          onHide={() => setDialogVisible(false)}
          token={token}
        />
      )}
      {dialogVisible && dialogType === "video" && (
        <DialogVideo
          visible={dialogVisible}
          position={dialogPosition}
          onHide={() => setDialogVisible(false)}
        />
      )}
      {dialogVisible && dialogType === "favorites" && (
        <DialogFavorites
          visible={dialogVisible}
          position={dialogPosition}
          onHide={() => setDialogVisible(false)}
        />
      )}
      {dialogVisible && dialogType === "history" && (
        <DialogHistory
          visible={dialogVisible}
          position={dialogPosition}
          onHide={() => setDialogVisible(false)}
          history={history}
          token={token}
        />
      )}
      {dialogVisible && dialogType === "info" && (
        <DialogInfo
          visible={dialogVisible}
          position={dialogPosition}
          onHide={() => setDialogVisible(false)}
        />
      )}
    </div>
  );
}
