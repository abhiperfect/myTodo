import React, { useContext, useMemo } from "react";
import { CssBaseline, Box, Container, Paper, Typography } from "@mui/material";
import TaskCard from "./TaskCard";
import TaskContainer from "./TasksContainer";
import { AppContext } from "../../context/AppContext";

const TaskColumn = ({ title = "To Do", tasks, titleColor = "#18e047" }) => {
  const { searchQuery, selectedPriorities } = useContext(AppContext);

  // Memoize filtered tasks to optimize re-calculation on every render
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearchQuery = searchQuery
        ? (task.title &&
            task.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (task.description &&
            task.description.toLowerCase().includes(searchQuery.toLowerCase()))
        : true;

      const matchesPriority =
        selectedPriorities.length > 0
          ? selectedPriorities.includes(task.priority.toLowerCase())
          : true;

      return matchesSearchQuery && matchesPriority;
    });
  }, [tasks, searchQuery, selectedPriorities]); // Recalculate only when these dependencies change

  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Box sx={{ bgcolor: "#2F3645", height: "90.5vh", padding: "10px" }}>
          <Paper
            sx={{
              bgcolor: "#021526",
              height: "10vh",
              padding: "10px",
              margin: "10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" color={titleColor}>
              {title} ({filteredTasks.length})
            </Typography>
          </Paper>

          <TaskContainer>
            {filteredTasks.length === 0 ? (
              <Typography variant="h6" color="gray">
                No tasks
              </Typography>
            ) : (
              filteredTasks.map((task) => (
                <TaskCard key={task.id} task={task} title={title} />
              ))
            )}
          </TaskContainer>
        </Box>
      </Container>
    </>
  );
};

export default React.memo(TaskColumn);
