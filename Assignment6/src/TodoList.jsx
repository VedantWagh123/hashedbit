import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: task.trim()
    };
    setTasks([...tasks, newTask]);
    setTask('');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const sortedTasks = [...tasks].sort((a, b) => 
    a.text.toLowerCase().localeCompare(b.text.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {sortedTasks.map((t) => (
          <li key={t.id}>
            {t.text} 
            <button onClick={() => handleDeleteTask(t.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
