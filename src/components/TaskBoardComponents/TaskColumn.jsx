import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Paper, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TaskCard from "./TaskCard";
import TaskContainer from "./TasksContainer";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

export default function TaskColumn({
  title = "To Do",
  tasks,
  titleColor = "#18e047",
}) {
  const { searchQuery, selectedPriorities } = useContext(AppContext);
  const filteredTasks = tasks.filter((task) => {
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

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Box sx={{ bgcolor: "#848484", height: "90.5vh", padding: "10px" }}>
          <Paper
            sx={{
              bgcolor: "#e4ecec",
              height: "10vh",
              padding: "10px",
              margin: "10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" color={titleColor}>
              {title} ({filteredTasks.length}){" "}
              {/* Updated to show filtered task count */}
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
    </React.Fragment>
  );
}
