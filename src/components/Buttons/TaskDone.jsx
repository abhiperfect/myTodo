import React, { useContext, useCallback } from "react";
import { IconButton } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { AppContext } from "../../context/AppContext";

const TaskDone = ({ task }) => {
  const { completeTask } = useContext(AppContext);

  // Memoize the function
  const handleTaskDone = useCallback(() => {
    completeTask(task.id);
  }, [completeTask, task.id]);

  // Extract styles
  const iconButtonStyles = {
    color: "#ffffff",
    "&:hover": {
      bgcolor: "#357a38",
    },
  };

  return (
    <IconButton onClick={handleTaskDone} sx={iconButtonStyles}>
      <TaskAltIcon />
    </IconButton>
  );
};

export default React.memo(TaskDone);
