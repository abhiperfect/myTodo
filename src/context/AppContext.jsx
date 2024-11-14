import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPriorities, setSelectedPriorities] = useState([]);

  const initialSampleData = {
    user: null,
    theme: "light",
    upcomingTasks: [
      {
        id: "1",
        title: "Design Landing Page",
        description: "Create a responsive landing page design.",
        dueDate: new Date(2024, 11, 25),
        priority: "High",
        status: "upcoming",
        comments: [
          { id: "c1", text: "Make sure it is mobile-friendly." },
          { id: "c2", text: "Add a hero section at the top." },
        ],
      },
      {
        id: "2",
        title: "API Integration",
        description: "Integrate API endpoints for user data.",
        dueDate: new Date(2024, 11, 20),
        priority: "Medium",
        status: "upcoming",
        comments: [],
      },
    ],
    overdueTasks: [
      {
        id: "3",
        title: "Update Documentation",
        description: "Revise and update the project documentation.",
        dueDate: new Date(2024, 10, 5),
        priority: "Low",
        status: "overdue",
        comments: [{ id: "c3", text: "Check for any outdated links." }],
      },
    ],
    completedTasks: [
      {
        id: "4",
        title: "Setup Database",
        description: "Set up the initial database schema and tables.",
        dueDate: new Date(2024, 9, 30),
        priority: "High",
        status: "completed",
        comments: [],
      },
    ],
  };
  const togglePriority = (priority) => {
    // console.log("seleceted pr", selectedPriorities);
    setSelectedPriorities((prevPriorities) =>
      prevPriorities.includes(priority)
        ? prevPriorities.filter((p) => p !== priority)
        : [...prevPriorities, priority]
    );
  };

  const [state, setState] = useState(() => {
    const savedState = JSON.parse(localStorage.getItem("appState"));
    return savedState || initialSampleData;
  });

  // Sync local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem("appState", JSON.stringify(state));
  }, [state]);

  const updateUser = (user) => {
    setState((prevState) => ({ ...prevState, user }));
  };

  const [filterPriority, setFilterPriority] = useState({
    High: false,
    Medium: false,
    Low: false,
  });

  const toggleTheme = () => {
    setState((prevState) => ({
      ...prevState,
      theme: prevState.theme === "light" ? "dark" : "light",
    }));
  };

  const addComment = (taskId, newComment) => {
    setState((prevState) => {
      const updateTasks = (tasks) =>
        tasks.map((task) =>
          task.id === taskId
            ? {
                ...task,
                comments: [
                  ...task.comments,
                  { id: `${Date.now()}`, text: newComment },
                ],
              }
            : task
        );

      return {
        ...prevState,
        upcomingTasks: updateTasks(prevState.upcomingTasks),
        overdueTasks: updateTasks(prevState.overdueTasks),
        completedTasks: updateTasks(prevState.completedTasks),
      };
    });
  };

  // Function to add a new task to upcomingTasks
  const addTask = (newTask) => {
    setState((prevState) => ({
      ...prevState,
      upcomingTasks: [
        ...prevState.upcomingTasks,
        { ...newTask, status: "upcoming", comments: [] },
      ],
    }));
  };

  // Function to check for overdue tasks and move them to overdueTasks
  const checkOverdueTasks = () => {
    const currentDate = new Date();
    setState((prevState) => {
      const updatedUpcomingTasks = prevState.upcomingTasks.filter((task) => {
        if (new Date(task.dueDate) < currentDate) {
          prevState.overdueTasks.push({ ...task, status: "overdue" });
          return false; // remove from upcomingTasks
        }
        return true;
      });

      return {
        ...prevState,
        upcomingTasks: updatedUpcomingTasks,
      };
    });
  };

  // Function to complete a task and move it to completedTasks
  const completeTask = (taskId) => {
    setState((prevState) => {
      const taskFromUpcoming = prevState.upcomingTasks.find(
        (task) => task.id === taskId
      );
      const taskFromOverdue = prevState.overdueTasks.find(
        (task) => task.id === taskId
      );

      // Determine where the task is located and remove it from the original array
      const updatedUpcomingTasks = prevState.upcomingTasks.filter(
        (task) => task.id !== taskId
      );
      const updatedOverdueTasks = prevState.overdueTasks.filter(
        (task) => task.id !== taskId
      );

      // Add the task to completedTasks
      const completedTask = {
        ...(taskFromUpcoming || taskFromOverdue),
        status: "completed",
      };

      return {
        ...prevState,
        upcomingTasks: updatedUpcomingTasks,
        overdueTasks: updatedOverdueTasks,
        completedTasks: [...prevState.completedTasks, completedTask],
      };
    });
  };

  // Run checkOverdueTasks on component load and at regular intervals
  useEffect(() => {
    checkOverdueTasks();
    const interval = setInterval(checkOverdueTasks, 24 * 60 * 60 * 1000); // Run daily
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const togglePriorityFilter = (priority) => {
    setFilterPriority((prev) => ({
      ...prev,
      [priority]: !prev[priority],
    }));
  };

  const getFilteredTasks = (tasks) => {
    const activeFilters = Object.keys(filterPriority).filter(
      (priority) => filterPriority[priority]
    );

    if (activeFilters.length === 0) return tasks;

    return tasks.filter((task) => activeFilters.includes(task.priority));
  };
  // Function to delete a task from state and localStorage
  const deleteTask = (taskId) => {
    setState((prevState) => {
      // Remove the task from each category (upcomingTasks, overdueTasks, completedTasks)
      const removeTaskFromCategory = (tasks) =>
        tasks.filter((task) => task.id !== taskId);

      const updatedUpcomingTasks = removeTaskFromCategory(
        prevState.upcomingTasks
      );
      const updatedOverdueTasks = removeTaskFromCategory(
        prevState.overdueTasks
      );
      const updatedCompletedTasks = removeTaskFromCategory(
        prevState.completedTasks
      );

      return {
        ...prevState,
        upcomingTasks: updatedUpcomingTasks,
        overdueTasks: updatedOverdueTasks,
        completedTasks: updatedCompletedTasks,
      };
    });
  };
  // Function to edit a task in state and localStorage
  const editTask = (taskId, updatedTask) => {
    setState((prevState) => {
      // Function to update a task in each category
      const updateTaskInCategory = (tasks) =>
        tasks.map((task) =>
          task.id === taskId ? { ...task, ...updatedTask } : task
        );

      const updatedUpcomingTasks = updateTaskInCategory(
        prevState.upcomingTasks
      );
      const updatedOverdueTasks = updateTaskInCategory(prevState.overdueTasks);
      const updatedCompletedTasks = updateTaskInCategory(
        prevState.completedTasks
      );

      return {
        ...prevState,
        upcomingTasks: updatedUpcomingTasks,
        overdueTasks: updatedOverdueTasks,
        completedTasks: updatedCompletedTasks,
      };
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        updateUser,
        toggleTheme,
        addComment,
        addTask,
        checkOverdueTasks,
        completeTask,
        filterPriority,
        togglePriorityFilter,
        getFilteredTasks,
        deleteTask,
        editTask,
        searchQuery,
        setSearchQuery,
        selectedPriorities,
        togglePriority,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
