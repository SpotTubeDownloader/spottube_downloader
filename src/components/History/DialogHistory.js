import React from "react";
import { Dialog } from "primereact/dialog";
import SongScroller from "../basicsComponent/SongScroller";

export default function DialogHistory({ visible, position, onHide, history , token}) {
    console.log(history);
  return (
    <div className="card">
      <Dialog
        header="Cronologia"
        visible={visible}
        position={position}
        style={{ width: "auto" }}
        onHide={onHide}
        draggable={false}
        resizable={false}
        maximizable
      >
        <SongScroller songs={history} token={token} isHistory={true}/>
      </Dialog>
    </div>
  );
}
