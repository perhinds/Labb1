// src/models/TaskModel.js
export const addTask = (tasks, newTask) => {
    return [...tasks, { text: newTask, completed: false }]
}

export const toggleTaskCompletion = (tasks, index) => {
    return tasks.map((task, idx) =>
        idx === index ? { ...task, completed: !task.completed } : task
    )
}

export const deleteTask = (tasks, index) => {
    return tasks.filter((_, idx) => idx !== index)
}
