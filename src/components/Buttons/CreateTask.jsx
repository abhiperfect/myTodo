import React, { useState, useContext, useCallback } from "react";
import Button from "@mui/material/Button";
import CreateTaskPopup from "../TaskBoardComponents/CreateTaskPopup";
import { AppContext } from "../../context/AppContext";

const CreateTask = ({ hide = true }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const { addTask } = useContext(AppContext);

  // Memoize handleCreateTask to prevent unnecessary re-creation
  const handleCreateTask = useCallback(
    (newTask) => {
      addTask(newTask);
    },
    [addTask]
  );

  const handleOpenPopup = () => setOpenPopup(true);
  const handleClosePopup = () => setOpenPopup(false);

  // Define styles outside JSX to prevent recreation on every render
  const buttonStyles = {
    display: { xs: hide ? "none" : "block", sm: "block" },
    bgcolor: "#1C2833",
    color: "white",
  };

  return (
    <>
      <Button
        variant="contained"
        sx={buttonStyles}
        onClick={handleOpenPopup}
      >
        + Create Task
      </Button>
      {openPopup && (
        <CreateTaskPopup
          open={openPopup}
          handleClose={handleClosePopup}
          handleCreateTask={handleCreateTask}
        />
      )}
    </>
  );
};

export default React.memo(CreateTask);
