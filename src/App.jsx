import React, { useState } from 'react';
import TaskInputForm from './TaskInputForm';
import TaskList from './TaskList';
import { Container, Button, Typography } from '@mui/material';

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

  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Mini Task Dashboard
      </Typography>
      <Typography variant="subtitle1">
        {tasks.length} pending tasks
      </Typography>
      <TaskInputForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      {tasks.length > 0 && (
        <Button variant="contained" color="secondary" onClick={deleteAllTasks}>
          Delete all
        </Button>
      )}
    </Container>
  );
}

export default App;
