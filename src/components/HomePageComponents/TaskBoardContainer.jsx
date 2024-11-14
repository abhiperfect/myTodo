import React, { useContext, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TaskColumn from "../TaskBoardComponents/TaskColumn";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { AppContext } from "../../context/AppContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function TaskBoardContainer() {
  const { state, addComment } = useContext(AppContext);
  const { upcomingTasks } = state;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid size={{ xs: 4, sm: 4, md: 4 }}>
          <TaskColumn
            title={"Upcoming Tasks"}
            titleColor="#11c7df"
            tasks={state.upcomingTasks}
          />
        </Grid>
        <Grid size={{ xs: 4, sm: 4, md: 4 }}>
          <TaskColumn
            title={"Overdue Tasks"}
            titleColor="#e78f2c"
            tasks={state.overdueTasks}
          />
        </Grid>{" "}
        <Grid size={{ xs: 4, sm: 8, md: 4 }}>
          <TaskColumn
            title={"Completed Tasks"}
            titleColor="#18e047"
            tasks={state.completedTasks}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
