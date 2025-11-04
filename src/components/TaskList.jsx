import React from 'react';
import TaskItem from './TaskItem.jsx';

export default function TaskList({ tasks, dispatch }) {
  const handleChange = (task) => dispatch({ type: 'changed', task });
  const handleDelete = (id) => dispatch({ type: 'deleted', id });

  if (tasks.length === 0) {
    return <p className="empty">No tasks yet. Add your first above! 🚀</p>;
  }

  return (
    <ul className="list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onChange={handleChange}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}