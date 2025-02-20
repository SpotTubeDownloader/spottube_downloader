import React, { useState, useContext } from "react";
import { DataScroller } from "primereact/datascroller";
import { Button } from "primereact/button";
import { downloadSongByYoutubeLink, streamSong } from "../../service/MusicService";
import { deleteElementinHistoryBySongId } from "../../service/HistoryService";
import { useAuth0 } from "@auth0/auth0-react";
import { ProgressSpinner } from "primereact/progressspinner";
import { getHistory } from "../../service/HistoryService";
import {
  addFavorite,
  deleteFavoriteBySongId,
} from "../../service/FavoriteService";
import "../../css/scroller.css";
import "../../css/spinner.css";
import { SongContext } from "../../context/SongContext";

export default function SongScroller({
  songs,
  token,
  isHistory = false,
  isFavorite = false,
  setDialogVisible,
}) {
  const { user } = useAuth0();
  const [loading, setLoading] = useState(false);
  const [favoriteLinks, setFavoriteLinks] = useState([]);
  const [data, setData] = useState(songs);
  const { 
    audioRef,
    setIsPlaying,
    setSeekValue,
    setThumbnail,
    setSongName,
    setArtist,
    setDuration,
    setPlayer,
    setAudioData,
    setLink
  } = useContext(SongContext); 

  const deleteCallback = async (id) => {
    setLoading(true);
    try {
      if (isHistory) {
        setData(await deleteElementinHistoryBySongId(token, user.sub, id));
      } else if (isFavorite) {
        setData(await deleteFavoriteBySongId(token, user.sub, id));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const favoriteCallback = async (link) => {
    setLoading(true);
    try {
      await addFavorite(token, user.sub, link);
      setFavoriteLinks((prevLinks) => [...prevLinks, link]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const songsTemplate = (data) => {
    const downloadCallback = async () => {
      setLoading(true);
      try {
        await downloadSongByYoutubeLink(token, user.sub, data.link);
        if (isHistory) {
          setData(await getHistory(token, user.sub));
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    
    const playSong = async (link) => {
      setLoading(true);
      try{
        setPlayer(true);
        const response = await streamSong(token, link);
        const blob = new Blob([response.data], { type: 'audio/mpeg' });
        const url = URL.createObjectURL(blob);
        setAudioData(blob);
        setLink(link);
        setSongName(decodeURIComponent(response.headers["songname"]));
        setArtist(decodeURIComponent(response.headers["artist"]));
        setDuration(decodeURIComponent(response.headers["duration"]));
        setThumbnail(response.headers["thumbnail"]);
        setSeekValue(0);
        audioRef.current.src = url;
        audioRef.current.play();
        setIsPlaying(true);
        setLoading(false);
        setDialogVisible(false);
      }catch(error){
        console.error(error);
        setDialogVisible(false);
        setLoading(false);
      }
    }

    return (
      <div id="songScroller">
        <div id="imageAndInfos">
          <a href={data.link} target="blank">
            <div id="imgSongBox">
              <img id="imgSong" src={`${data.thumbnail}`} />
            </div>
          </a>
          <div id="titleSong">
            <h1>{data.title}</h1>
          </div>
        </div>
        {isFavorite && (
          <div id="boxButton" style={{ justifyContent: "space-between" }}>
            <Button
              id="historyButtons"
              icon="pi pi-download"
              label="Scarica"
              severity="success"
              onClick={downloadCallback}
            ></Button>
            <Button
              id="historyButtons"
              icon="pi pi-play"
              label="Riproduci"
              onClick={() => playSong(data.link)}
            ></Button>
            <Button
              id="historyButtons"
              icon="pi pi-trash"
              severity="danger"
              label="Elimina"
              onClick={() => {
                deleteCallback(data.songId);
              }}
            ></Button>
          </div>
        )}
        {isHistory && (
          <div id="boxButtonFavorites" style={{ justifyContent: "space-between" }}>
            <Button
              id="historyButtons"
              icon="pi pi-download"
              label="Scarica"
              severity="success"
              onClick={downloadCallback}
            ></Button>
            <Button
              id="historyButtons"
              icon="pi pi-play"
              label="Riproduci"
              onClick={() => playSong(data.link)}
            ></Button>
            <Button
              id="favoritesButton"
              icon="pi pi-star"
              style={{
                color: favoriteLinks.includes(data.link)
                  ? "yellow"
                  : "whitesmoke",
              }}
              rounded
              outlined
              severity="help"
              aria-label="Favorite"
              onClick={() => favoriteCallback(data.link)}
            />
            <Button
              id="historyButtons"
              icon="pi pi-trash"
              severity="danger"
              label="Elimina"
              onClick={() => {
                deleteCallback(data.songId);
              }}
            ></Button>
          </div>
        )}
        {!isFavorite && !isHistory && (
          <div id="boxButton" style={{ justifyContent: "space-between" }}>
            <Button
              id="historyButtons"
              icon="pi pi-download"
              label="Scarica"
              severity="success"
              onClick={downloadCallback}
            ></Button>
            <Button
              id="historyButtons"
              icon="pi pi-play"
              label="Riproduci"
              onClick={() => playSong(data.link)}
            ></Button>
            <Button
              id="favoritesButton"
              icon="pi pi-star"
              style={{
                color: favoriteLinks.includes(data.link)
                  ? "yellow"
                  : "whitesmoke",
              }}
              rounded
              outlined
              severity="help"
              aria-label="Favorite"
              onClick={() => favoriteCallback(data.link)}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {loading && (
        <div className="spinner">
          <ProgressSpinner
            style={{ width: "50px", height: "50px" }}
            strokeWidth="8"
            fill="var(--surface-ground)"
            animationDuration=".5s"
          />
        </div>
      )}
      <DataScroller
        value={data}
        itemTemplate={songsTemplate}
        rows={1000}
        inline
        scrollHeight="auto"
        emptyMessage="Nessun elemento trovato"
      />
    </>
  );
}
