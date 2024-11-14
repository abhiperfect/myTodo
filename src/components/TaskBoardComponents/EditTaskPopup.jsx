import React, { useState, useEffect, useContext } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { AppContext } from "../../context/AppContext";

const EditTaskPopup = ({ task, open, onClose }) => {
  const { editTask } = useContext(AppContext);
  
  const [editedTask, setEditedTask] = useState({ ...task });

  // Ensure dueDate is a Date object when the component is mounted or task changes
  useEffect(() => {
    if (editedTask.dueDate && typeof editedTask.dueDate === "string") {
      setEditedTask((prev) => ({
        ...prev,
        dueDate: new Date(prev.dueDate), // Convert to Date if it's a string
      }));
    }
  }, [editedTask.dueDate]);

  // Handle input changes for the task fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prev) => ({
      ...prev,
      [name]: name === "dueDate" ? new Date(value) : value,
    }));
  };

  // Handle saving the updated task
  const handleSaveChanges = () => {
    editTask(task.id, editedTask);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          name="title"
          value={editedTask.title}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Description"
          name="description"
          value={editedTask.description}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Due Date"
          name="dueDate"
          type="date"
          value={
            editedTask.dueDate instanceof Date
              ? editedTask.dueDate.toISOString().slice(0, 10)
              : ""
          }
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Priority</InputLabel>
          <Select
            label="Priority"
            name="priority"
            value={editedTask.priority}
            onChange={handleInputChange}
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSaveChanges} color="primary">
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTaskPopup;
