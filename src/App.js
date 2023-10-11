import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  return (
    <div className="container">
      <h1 className='h1'>ToDoApp</h1>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={() =>  setTasks([...tasks, task])}>Add</button>
      </div>
      <h3>Tasks</h3>
      <li className="todo-list">
        {tasks.map((item, index) => (
          <li key={index} className="todo-item">
            <span className="todo-text">{item}</span>
            
            <div className="todo-actions">
              <button
                className="delete"
                onClick={() => {
                  setTasks(tasks.filter((t) => t !== item)); 
                }}
              >
                Delete
              </button>
              <div className= "todo-actions">
              <button onClick={()=>{
                var newValue = prompt("Edit Todo", tasks[index])
                setTasks(tasks.map((t)=>{if(t==item) return newValue; else return t;}));
              }}>Edit</button>
              </div>
            </div>
          </li>
        ))}
      </li>
    </div>           
  );
}

export default App;
