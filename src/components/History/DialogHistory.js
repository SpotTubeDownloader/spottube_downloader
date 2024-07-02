import React from "react";
import { Dialog } from "primereact/dialog";
import SongScroller from "../basicsComponent/SongScroller";
import "../../css/dialogGeneral.css";
import "../../css/scroller.css";


export default function DialogHistory({ visible, onHide, history , token, setDialogVisible, position="center"}) {
  return (
    <div className="card">
      <Dialog
        header="Cronologia"
        visible={visible}
        position={position}
        style={{ width: "60vw" }}
        onHide={onHide}
        draggable={false}
        resizable={false}
        maximizable
      >
        <SongScroller songs={history} token={token} isHistory={true} setDialogVisible={setDialogVisible}/>
      </Dialog>
    </div>
  );
}
