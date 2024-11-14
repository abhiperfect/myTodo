import React, { useContext, useState } from "react";
import { IconButton } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { AppContext } from "../../context/AppContext";
import EditTaskPopup from "../TaskBoardComponents/EditTaskPopup";

const EditTask = ({ task }) => {
  const [openEditDialog, setOpenEditDialog] = useState(false);

  // Function to close the Edit Task Popup
  const handleEditDialogClose = () => {
    setOpenEditDialog(false);
  };

  // Function to open the Edit Task Popup
  const handleEdit = () => {
    setOpenEditDialog(true);
  };

  return (
    <>
      <IconButton
        onClick={handleEdit}  // Opens the edit popup
        sx={{
          color: "#ffffff",
          "&:hover": {
            bgcolor: "#ffffff",
            color: "#3b3e42",
          },
        }}
      >
        <EditNoteIcon />
      </IconButton>
      <EditTaskPopup
        task={task}
        open={openEditDialog}
        onClose={handleEditDialogClose}  // Closes the popup
      />
    </>
  );
};

export default EditTask;
