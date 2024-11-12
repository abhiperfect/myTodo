
import React from 'react';
import { Card, CardContent, Typography, Chip, Avatar } from '@mui/material';

const TaskCard = ({ task }) => (
  <Card sx={{ bgcolor: '#2c3e50', marginY: 1 }}>
    <CardContent>
      <Typography variant="h6" color="white">{task.title}</Typography>
      <Typography variant="body2" color="gray">{task.description}</Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
        <Chip label={task.priority} color={task.priority === "High" ? "error" : task.priority === "Medium" ? "warning" : "success"} />
        <Typography variant="caption" color="white">{task.dueDate}</Typography>
      </Box>
      <Box mt={1}>
        {task.tags?.map((tag, index) => (
          <Chip key={index} label={tag} size="small" sx={{ marginRight: 0.5 }} />
        ))}
        {task.assignees?.map((assignee, index) => (
          <Avatar key={index} src={assignee.avatar} sx={{ width: 24, height: 24, marginLeft: 0.5 }} />
        ))}
      </Box>
    </CardContent>
  </Card>
);

export default TaskCard;
