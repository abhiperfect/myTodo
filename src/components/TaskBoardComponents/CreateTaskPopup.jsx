import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, MenuItem, Select, InputLabel, FormControl, Snackbar, Alert } from '@mui/material';

const CreateTaskPopup = ({ open, handleClose, handleCreateTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');
  const [description, setDescription] = useState('');
  const [openToast, setOpenToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission

  const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

  const handleSubmit = () => {
    setIsSubmitted(true); // Mark form as submitted

    // Check for empty fields
    if (!taskTitle || !dueDate || !description) {
      setErrorMessage('All fields are required.');
      setOpenToast(true);
      return;
    }

    // Generate a unique ID
    const taskId = Date.now();

    // Create the new task object
    const newTask = {
      id: taskId,
      title: taskTitle,
      description,
      dueDate,
      priority,
    };

    // Call the parent function to handle the new task creation
    handleCreateTask(newTask);

    // Clear fields and close the dialog
    setTaskTitle('');
    setDueDate('');
    setPriority('Low');
    setDescription('');
    handleClose();
    setIsSubmitted(false); // Reset submission state
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    if (selectedDate < currentDate) {
      setErrorMessage('You cannot select a past date.');
      setOpenToast(true); // Show toast if the selected date is in the past
    } else {
      setDueDate(selectedDate); // Otherwise, set the due date
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Task</DialogTitle>
        <DialogContent>
          <TextField
            label="Task Title"
            fullWidth
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            sx={{ marginBottom: 2 }}
            error={isSubmitted && !taskTitle} // Only show error after submit
            helperText={isSubmitted && !taskTitle ? 'Task Title is required' : ''}
          />
          <TextField
            label="Due Date"
            type="date"
            fullWidth
            value={dueDate}
            onChange={handleDateChange}
            sx={{ marginBottom: 2 }}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              inputProps: {
                min: currentDate, // Restrict to current date or later
              },
            }}
            error={isSubmitted && !dueDate} // Only show error after submit
            helperText={isSubmitted && !dueDate ? 'Due Date is required' : ''}
          />
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Priority</InputLabel>
            <Select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              label="Priority"
            >
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Description"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ marginBottom: 2 }}
            error={isSubmitted && !description} // Only show error after submit
            helperText={isSubmitted && !description ? 'Description is required' : ''}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create Task
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar Toast for invalid date or empty fields */}
      <Snackbar
        open={openToast}
        autoHideDuration={3000}
        onClose={() => setOpenToast(false)}
      >
        <Alert severity="error" onClose={() => setOpenToast(false)}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CreateTaskPopup;
