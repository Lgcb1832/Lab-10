import React, { useState } from 'react';
import TaskInputForm from './TaskInputForm';
import TaskList from './TaskList';
import { Container } from '@mui/material';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task) {
      setTasks([...tasks, task]);
    }
  };

  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <h1>Mini Task Dashboard</h1>
      <TaskInputForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </Container>
  );
}

export default App;
