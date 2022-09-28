import { useState } from 'react';
import './App.css';
import data from './Componentes/data.json'
import ListaTareas from './Componentes/ListaTareas';
import TareaForm from './Componentes/TareaForm';

function App() {
  const [tareas, setTareas] = useState(data);
  const onComplete = (id) => {
    console.log('task', id)
    setTareas(tareas.map((tarea) => {
      return tarea.id === Number(id) ? { ...tarea, completada: !tarea.completada } : { ...tarea };
    }))
  }
  const onDeleteItem = (id) => {
    setTareas([...tareas].filter(todo => todo.id !== id))
  }
  const addTarea = (nuevaTarea) => {
    console.log('tarea', nuevaTarea)
    let nuevoItem = { id: +new Date(), task: nuevaTarea, completada: false }
    setTareas([...tareas, nuevoItem])
  }

  return (

    <div className="container">
      <TareaForm addTarea={addTarea} />
      <ListaTareas tareas={tareas} onComplete={onComplete} onDeleteItem={onDeleteItem} />
    </div>
  );
}

export default App;
