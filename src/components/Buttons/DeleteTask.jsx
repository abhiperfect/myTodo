import React, { useContext, useCallback } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { AppContext } from "../../context/AppContext";

const DeleteTask = ({ id }) => {
  const { deleteTask } = useContext(AppContext);

  // Memoize handleDelete to prevent re-creation on each render
  const handleDelete = useCallback(() => {
    deleteTask(id);
  }, [deleteTask, id]);

  // Define styles outside JSX to avoid recreating the object on each render
  const iconButtonStyles = {
    color: "#ffffff",
    "&:hover": {
      bgcolor: "#ffffff",
      color: "#3b3e42",
    },
  };

  return (
    <IconButton onClick={handleDelete} sx={iconButtonStyles}>
      <DeleteIcon />
    </IconButton>
  );
};

export default React.memo(DeleteTask);
