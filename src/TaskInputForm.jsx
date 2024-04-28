import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function TaskInputForm({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask(newTask);
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Enter a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        margin="normal"
        fullWidth
      />
      <Button type="submit" color="primary" variant="contained">
        Add Task
      </Button>
    </form>
  );
}

export default TaskInputForm;
