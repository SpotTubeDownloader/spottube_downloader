import React from "react";
import { Dialog } from "primereact/dialog";
import ListBoxHistory from "./ListBoxHistory";

export default function DialogHistory({ visible, position, onHide, history }) {
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
        maximizable
        resizable={false}
      >
        <ListBoxHistory history={history}/>
      </Dialog>
    </div>
  );
}
