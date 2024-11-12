// TaskColumn.js
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const TaskColumn = ({ title, tasks }) => (
  <Box sx={{ backgroundColor: '#34495e', padding: 2, borderRadius: 2 }}>
    <Typography variant="h6" color="white">{title}</Typography>
    {tasks.map((task) => (
      <Card key={task.id} sx={{ marginY: 1, backgroundColor: '#2c3e50' }}>
        <CardContent>
          <Typography variant="h6" color="white">{task.title}</Typography>
          <Typography variant="body2" color="gray">{task.description}</Typography>
        </CardContent>
      </Card>
    ))}
  </Box>
);

export default TaskColumn;
