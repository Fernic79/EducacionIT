
const TaskList = ({ tasks, onDeleteTask }) => {
  if (tasks.length === 0) return <p className="empty-msg">No hay tareas pendientes.</p>;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <span>{task.text}</span>
          <button 
            className="delete-btn" 
            onClick={() => onDeleteTask(task.id)}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;