
import { useState } from 'react';
import TaskForm from './components/taskForm.jsx';
import TaskList from './components/taskList.jsx';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Función para agregar tareas
  const addTask = (newTask) => {
    // Para no cambiar el estado original
    setTasks([...tasks, newTask]);
  };

  // Función para eliminar tareas
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>Mi Lista de Tareas</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;