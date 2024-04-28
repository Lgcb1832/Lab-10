import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TaskList({ tasks, onDeleteTask }) {
  return (
    <List>
      {tasks.map((task, index) => (
        <ListItem key={index} dense>
          <ListItemText primary={task} />
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => onDeleteTask(index)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default TaskList;
