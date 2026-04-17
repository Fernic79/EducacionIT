
import { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Para no cargar tareas vacías
    if (!text.trim()) return;

    // Genera un ID único para la nueva tarea
    const newTask = {
      id: crypto.randomUUID(),
      text: text
    };

    // Enviar la tarea al componente
    onAddTask(newTask);
    // Limpiar el input después de agregar la tarea
    setText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TaskForm;