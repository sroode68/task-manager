import React, {useState} from "react"

import './App.css';
import Task from "./Components/Task"

function App() {

  const taskData = {Title: "Title", Date: "9/20/21", Description: "Description"}

  const [tasks, setTasks] = useState([])

  const addTask = () => {
    setTasks([...tasks, taskData])
  }

  return (
    <div className="App" style={{padding:"10px"}}>
      <button onClick={addTask}>Add Task +</button>
      {tasks.map((task) => (
        <Task Title={task.Title} Date={task.Date} Description={task.Description} />
      ))}
    </div>
  );
}

export default App;
