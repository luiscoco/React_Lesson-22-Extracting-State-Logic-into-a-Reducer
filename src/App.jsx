import React, { useReducer, useState } from 'react';
import { tasksReducer } from './reducers/tasksReducer.js';
import TaskList from './components/TaskList.jsx';
import { initialTasks } from './tasksData.js';

let nextId = initialTasks.length
  ? Math.max(...initialTasks.map(t => t.id)) + 1
  : 1;

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [text, setText] = useState('');

  function handleAdd() {
    const trimmed = text.trim();
    if (!trimmed) return;
    dispatch({ type: 'added', id: nextId++, text: trimmed });
    setText('');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleAdd();
  }

  return (
    <div className="page">
      <header className="header">
        <h1>Task Manager — <span className="pill">useReducer</span> Demo</h1>
        <p className="subtitle">
          Extract state logic into a reducer. Actions: <code>added</code>, <code>changed</code>, <code>deleted</code>.
        </p>
      </header>
      <section className="card">
        <div className="add-row">
          <input
            className="input"
            placeholder="Add a task and press Enter…"
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="btn" onClick={handleAdd}>Add</button>
        </div>
        <TaskList tasks={tasks} dispatch={dispatch} />
        <div className="footnote">
          <p>Tip: Try editing text, toggling completion, and deleting items. All mutations
          are centralized in <code>tasksReducer</code>.</p>
        </div>
      </section>
    </div>
  );
}