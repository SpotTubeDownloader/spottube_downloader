import React from "react";
import { Dialog } from "primereact/dialog";
import ListBoxHistory from "./ListBoxHistory";
import SongScroller from "../basicsComponent/SongScroller";

export default function DialogHistory({ visible, position, onHide, history , token}) {
    console.log(history);
  return (
    <div className="card">
      <Dialog
        header="Cronologia"
        visible={visible}
        position={position}
        style={{ width: "70vw" }}
        onHide={onHide}
        draggable={false}
        resizable={false}
        maximizable
      >
        <SongScroller songs={history} token={token}/>
      </Dialog>
    </div>
  );
}
