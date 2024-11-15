import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'
import ToDoList from './components/ToDoList'
import {
    handleAddTask,
    handleToggleComplete,
    handleDeleteTask
} from './controllers/AppController'

function App() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    useEffect(() => {
        console.log('Tasks updated:', tasks)
    }, [tasks])

    return (
        <div className="App">
            <div className="header-container">
                <h1>Min To-Do Lista</h1>
            </div>

            {/* Container for form */}
            <div className="form-container">
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleAddTask(tasks, newTask, setTasks, setNewTask)
                    }}
                >
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Lägg till en uppgift"
                    />
                    <button type="submit">Lägg till</button>
                </form>
            </div>

            <ToDoList
                tasks={tasks}
                toggleComplete={(index) =>
                    handleToggleComplete(tasks, index, setTasks)
                }
                deleteTask={(index) => handleDeleteTask(tasks, index, setTasks)}
            />
        </div>
    )
}

export default App
