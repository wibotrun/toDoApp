import React from "react";
import TareaItem from "./TareaItem";

function ListaTareas({ tareas,onComplete,onDeleteItem }) {
  return (
    <div>
      {tareas.map((tarea, index) => (
        <TareaItem tarea = {tarea} key={`tarea-${index}`} onComplete={onComplete} onDeleteItem={onDeleteItem}/>
      ))}
    </div>
  );
}

export default ListaTareas;
