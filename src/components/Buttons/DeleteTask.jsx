import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { AppContext } from "../../context/AppContext";
const DeleteTask = ({ id }) => {
  const { deleteTask } = useContext(AppContext);
  const handleDelete = () => {
    deleteTask(id);
  };
  return (
    <IconButton
      onClick={handleDelete}
      sx={{
        color: "#ffffff",
        "&:hover": {
          bgcolor: "#ffffff",
          color: "#3b3e42",
        },
      }}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteTask;
