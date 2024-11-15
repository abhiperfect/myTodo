# Technical Questions

## 1. How long did you spend on the coding test?

I spent approximately **24 hours** working on the coding test. This time was primarily spent on implementing the task management functionality, ensuring all features were correctly implemented, and testing the user interface.

## 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

The most useful feature in the latest version of **JavaScript** (ES6 and later) that I have utilized is **React hooks**. These hooks, such as `useState`, `useEffect`, `useMemo`, `useCallback`, and `useContext`, allow for cleaner, more efficient code and make it easier to manage component state, side effects, and performance optimization.

For example, here’s how I used `useMemo` to optimize performance by memoizing the filtered tasks:

```javascript
import { useMemo } from "react";

const filteredTasks = useMemo(() => {
  return tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
}, [tasks, searchQuery]); // Only re-compute when tasks or searchQuery change
```

This ensures that the filtered list of tasks is only recalculated when necessary, improving performance, especially when dealing with a large number of tasks.

## 3. How would you track down a performance issue in production? Have you ever had to do this?

To track down a performance issue in production, I would follow a systematic approach:

1. **Analyze the Application:** Use tools like **Chrome DevTools** (Performance tab) to monitor CPU usage, memory consumption, and rendering times. I would also use **React Developer Tools** to look for unnecessary re-renders.
2. **Look for Bottlenecks:** Check if there are any long-running synchronous operations or unnecessary state updates that could block the UI thread.
3. **Optimize Rendering:** Ensure components only re-render when necessary, leveraging `React.memo` and `useMemo` for component memoization and optimization.

Yes, I’ve had to do this in past projects, particularly when rendering large lists. One key issue was unnecessary re-renders, which I resolved by optimizing components with `React.memo` and `useMemo`.

## 4. If you had more time, what additional features or improvements would you consider adding to the task management application?

If I had more time, I would consider adding the following features:

- **Task Sorting:** Implement sorting tasks by deadline, priority, or creation date.
- **Drag and Drop:** Allow tasks to be reordered using drag-and-drop functionality (possibly using libraries like **react-beautiful-dnd**).
- **Task Comments and History:** Implement task commenting or a change history to track modifications on tasks.
- **User Authentication:** Add user authentication to manage tasks based on different user accounts.

### **Performance Optimizations**:

- **Extract CSS:** To reduce the bundle size and improve the maintainability of the application, I would extract styles from JSX into separate CSS or SCSS files (using CSS modules or styled-components).
- **Memoization with `useMemo`, `React.memo`, and `useCallback`:** I would use these React hooks to prevent unnecessary renders:
  - `useMemo` for expensive calculations.
  - `React.memo` for memoizing functional components that don't change unless their props change.
  - `useCallback` for memoizing event handler functions to prevent re-creating them on each render.
- **Context API:** I would continue using the **Context API** for managing global state (like task data or user preferences) instead of prop drilling, ensuring that components only re-render when necessary by updating only the relevant parts of the context state.

These optimizations would help the app scale more efficiently, improve rendering performance, and reduce the amount of unnecessary computation.