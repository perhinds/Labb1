import React from 'react'
import ToDoItem from './ToDoItem'
import { Table } from 'react-bootstrap'
import './ToDoItem.css'

function ToDoList({ tasks, toggleComplete, deleteTask }) {
    return (
        <Table striped bordered hover className="table-custom-width">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Completed</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => (
                    <ToDoItem
                        key={index}
                        task={task}
                        toggleComplete={() => toggleComplete(index)}
                        deleteTask={() => deleteTask(index)}
                    />
                ))}
            </tbody>
        </Table>
    )
}

export default ToDoList
