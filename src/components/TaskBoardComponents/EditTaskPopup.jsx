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
import { styled } from "@mui/material/styles";
import { AppContext } from "../../context/AppContext";

// Styled components for custom theme
const CustomDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogPaper": {
    backgroundColor: '#2c2f33', // Dark Slate background
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    padding: '20px',
  },
}));

const CustomDialogTitle = styled(DialogTitle)(({ theme }) => ({
  color: '#F1C27D', // Soft Gold color for the title
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: '1.5rem',
}));

const CustomDialogContent = styled(DialogContent)(({ theme }) => ({
  backgroundColor: '#2c2f33', // Dark Slate background
  color: '#F1C27D', // Soft Gold text color
  padding: '30px',
}));

const CustomButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#ffffff', // Light Teal hover effect
    color: '#2c2f33',
  },
}));

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
    <CustomDialog open={open} onClose={onClose}>
      <CustomDialogTitle sx={{ bgcolor: '#2c2f33', color: '#ffffff' }}>Edit Task</CustomDialogTitle>
      <CustomDialogContent>
        <TextField
          label="Title"
          name="title"
          value={editedTask.title}
          onChange={handleInputChange}
          fullWidth
          sx={{
            marginBottom: 2,
            input: { color: '#ffffff', fontWeight: 'bold' }, // Soft Gold text for input
            '& .MuiInputLabel-root': { color: '#ffffff' }, // Soft Gold label
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#ffffff', // White border for input
              },
              '&:hover fieldset': {
                borderColor: '#ffffff', // White border on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#ffffff', // White border when focused
              },
            },
          }}
        />
        <TextField
          label="Description"
          name="description"
          value={editedTask.description}
          onChange={handleInputChange}
          fullWidth
          sx={{
            marginBottom: 2,
            input: { color: '#ffffff', fontWeight: 'bold' }, // Soft Gold text for input
            '& .MuiInputLabel-root': { color: '#ffffff' }, // Soft Gold label
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#ffffff', // White border for input
              },
              '&:hover fieldset': {
                borderColor: '#ffffff', // White border on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#ffffff', // White border when focused
              },
            },
          }}
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
          sx={{
            marginBottom: 2,
            input: { color: '#ffffff', fontWeight: 'bold' }, // Soft Gold text for input
            '& .MuiInputLabel-root': { color: '#ffffff' }, // Soft Gold label
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#ffffff', // White border for input
              },
              '&:hover fieldset': {
                borderColor: '#ffffff', // White border on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#ffffff', // White border when focused
              },
            },
          }}
        />
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel sx={{ color: '#ffffff' }}>Priority</InputLabel> {/* Soft Gold label */}
          <Select
            label="Priority"
            name="priority"
            value={editedTask.priority}
            onChange={handleInputChange}
            sx={{
              color: '#ffffff',
              '& .MuiSelect-icon': { color: '#ffffff' }, // White icon
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#ffffff', // White border for select input
                },
                '&:hover fieldset': {
                  borderColor: '#ffffff', // White border on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#ffffff', // White border when focused
                },
              },
            }}
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>
      </CustomDialogContent>
      <DialogActions sx={{ bgcolor: '#2c2f33' }}>
        <CustomButton onClick={onClose} color="error">
          Cancel
        </CustomButton>
        <CustomButton onClick={handleSaveChanges} color="success">
          Save Changes
        </CustomButton>
      </DialogActions>
    </CustomDialog>
  );
};

export default EditTaskPopup;
