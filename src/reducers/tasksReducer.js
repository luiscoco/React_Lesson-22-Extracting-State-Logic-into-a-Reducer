import { produce } from 'immer';
export function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added':
      return produce(tasks, draft => {
        draft.push({ id: action.id, text: action.text, done: false });
      });
    case 'changed':
      return produce(tasks, draft => {
        const idx = draft.findIndex(t => t.id === action.task.id);
        if (idx !== -1) draft[idx] = action.task;
      });
    case 'deleted':
      return tasks.filter(t => t.id !== action.id);
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}