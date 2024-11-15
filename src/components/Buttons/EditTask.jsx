import React, { useContext, useState, useCallback } from "react";
import { IconButton } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { AppContext } from "../../context/AppContext";
import EditTaskPopup from "../TaskBoardComponents/EditTaskPopup";

const EditTask = ({ task }) => {
  const [openEditDialog, setOpenEditDialog] = useState(false);

  // Memoize functions
  const handleEditDialogClose = useCallback(() => {
    setOpenEditDialog(false);
  }, []);

  const handleEdit = useCallback(() => {
    setOpenEditDialog(true);
  }, []);

  // Extract styles
  const iconButtonStyles = {
    color: "#ffffff",
    "&:hover": {
      bgcolor: "#ffffff",
      color: "#3b3e42",
    },
  };

  return (
    <>
      <IconButton onClick={handleEdit} sx={iconButtonStyles}>
        <EditNoteIcon />
      </IconButton>
      <EditTaskPopup
        task={task}
        open={openEditDialog}
        onClose={handleEditDialogClose}
      />
    </>
  );
};

export default React.memo(EditTask);
