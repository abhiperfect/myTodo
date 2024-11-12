import React from 'react';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import TaskColumn from './TaskColumn';
import NestedGridColumns from './TaskBoardComponents/Example';
import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const todoTasks = [
  { id: 1, title: "Layout Design", description: "Create layout design for the platform" },
  { id: 2, title: "e-Finance Onboarding", description: "Onboard e-finance clients" },
  { id: 3, title: "Create Iconset", description: "Create icons for the platform" },
  { id: 4, title: "Explore Visual Concepts", description: "Develop visual concept ideas" },
];

const inProgressTasks = [
  { id: 3, title: "Create Iconset", description: "Create icons for the platform" },
  { id: 4, title: "Explore Visual Concepts", description: "Develop visual concept ideas" },
];

const inReviewTasks = [
  { id: 5, title: "Office Pictures", description: "Take pictures of the office" },
  { id: 6, title: "Complete Wireframes", description: "Finalize wireframes for review" },
  { id: 7, title: "Create Iconset", description: "Create icons for the platform" },
  { id: 8, title: "Explore Visual Concepts", description: "Develop visual concept ideas" },
  { id: 9, title: "Create Iconset", description: "Create icons for the platform" },
  { id: 10, title: "Explore Visual Concepts", description: "Develop visual concept ideas" },
  { id: 11, title: "Create Iconset", description: "Create icons for the platform" },
  { id: 12, title: "Explore Visual Concepts", description: "Develop visual concept ideas" },
];

const TaskBoard = () => (
  <Grid container spacing={2} sx={{ padding: 2 }} columns={24}>
    <Grid item  xs={8} sm={8} md={8} >
      <TaskColumn title="To Do" tasks={todoTasks} />
    </Grid>
    <Grid item  xs={8} sm={8} md={8}>
      <TaskColumn title="In Progress" tasks={inProgressTasks} />
    </Grid>
    <Grid item  xs={8} sm={8} md={8}>
      <TaskColumn title="In Review" tasks={inReviewTasks} />
    </Grid>
  </Grid>
  // <Grid container spacing={2} columns={24}>
  //       <Grid size={8}>
  //          <TaskColumn title="To Do" tasks={todoTasks} />
  //       </Grid>
  //       <Grid  size={16}>
  //         <Grid size={12}>
  //         <TaskColumn title="To Do" tasks={todoTasks} />
  //         </Grid>
  //         <Grid size={12}>
  //         <TaskColumn title="To Do" tasks={todoTasks} />
  //         </Grid>
  //       </Grid>
  //       <Grid size={8}>
  //         <Item>size=8/24</Item>
  //       </Grid>
  //     </Grid>
  // <NestedGridColumns />
);

export default TaskBoard;
