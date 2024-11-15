// src/controllers/AppController.js
import { addTask, toggleTaskCompletion, deleteTask } from '../models/TaskModel';

export const handleAddTask = (tasks, newTask, setTasks, setNewTask) => {
  if (newTask.trim() === '') return;
  const updatedTasks = addTask(tasks, newTask);
  setTasks(updatedTasks);
  setNewTask(''); // Nollställ inputfältet
};

export const handleToggleComplete = (tasks, index, setTasks) => {
  const updatedTasks = toggleTaskCompletion(tasks, index);
  setTasks(updatedTasks);
};

export const handleDeleteTask = (tasks, index, setTasks) => {
  const updatedTasks = deleteTask(tasks, index);
  setTasks(updatedTasks);
};
