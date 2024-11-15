import React from 'react';
import { Button } from 'react-bootstrap';

function ToDoItem({ task, toggleComplete, deleteTask }) {
  return (
    <tr>
      <td style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </td>
      <td>

        <input
          type="checkbox"
          checked={task.completed} // Markerar den om completed är true
          onChange={toggleComplete} // Anropar toggleComplete vid klick
        />
      </td>
      <td>
  
        <Button variant="success" onClick={toggleComplete} className="me-2">
          {task.completed ? 'Undo' : 'Complete'}
        </Button>
        <Button variant="danger" onClick={deleteTask}>
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default ToDoItem;
