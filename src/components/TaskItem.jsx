import React from 'react';

export default function TaskItem({ task, onChange, onDelete }) {
  return (
    <li className="task">
      <label className="check">
        <input
          type="checkbox"
          checked={task.done}
          onChange={e => onChange({ ...task, done: e.target.checked })}
        />
      </label>
      <input
        className={`task-text ${task.done ? 'done' : ''}`}
        type="text"
        value={task.text}
        onChange={e => onChange({ ...task, text: e.target.value })}
      />
      <button className="btn btn-danger" onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}