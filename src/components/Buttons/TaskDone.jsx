import React,{useContext} from "react";
import Button from "@mui/material/Button";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { IconButton } from "@mui/material";
import { AppContext } from "../../context/AppContext";

const TaskDone = ({ task }) => {
  const { completeTask } = useContext(AppContext);
  const handleTaskDone = (taskId) => {
    completeTask(taskId);
  }
  return (
    <IconButton
      onClick={() => handleTaskDone(task.id)}
      sx={{
        color: "#ffffff",
        "&:hover": {
          bgcolor: "#357a38",
        },
      }}
    >
      <TaskAltIcon />
    </IconButton>
  );
}

export default TaskDone;