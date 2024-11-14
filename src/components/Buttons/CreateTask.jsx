import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import CreateTaskPopup from "../TaskBoardComponents/CreateTaskPopup";
import { AppContext } from "../../context/AppContext";
const CreateTask = ({ hide = true }) => {

  const [openPopup, setOpenPopup] = useState(false);
  const { addTask } = useContext(AppContext);
  const handleOpenPopup = () => setOpenPopup(true);
  const handleClosePopup = () => setOpenPopup(false);

  const handleCreateTask = (newTask) => {
    addTask(newTask);
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{
          display: { xs: hide ? "none" : "block", sm: "block" },
          bgcolor: "#1C2833",
          color: "white",
        }}
        onClick={handleOpenPopup}
      >
        + Create Task
      </Button>
      <CreateTaskPopup
        open={openPopup}
        handleClose={handleClosePopup}
        handleCreateTask={handleCreateTask}
      />
    </>
  );
};

export default CreateTask;
