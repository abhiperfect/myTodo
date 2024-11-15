# Task Management App

A simple and efficient task management application built with React, Material UI, and context API to manage tasks with features like priority filtering, task details, comments, and more.

## Features

- **Task Management**: Create, edit, and delete tasks.
- **Priority Filter**: Filter tasks by priority (High, Medium, Low).
- **Task Description**: View task details with the option to expand or collapse descriptions.
- **Comments**: Add, view, and manage task comments.
- **Responsive Design**: Fully responsive layout with a sidebar for desktop and a mobile-friendly drawer.
- **Task Completion**: Mark tasks as done.

## Technologies Used

- **React**: For building the user interface.
- **Material UI**: For UI components and styling.
- **Context API**: For managing global state (e.g., tasks, search query, selected priorities).
- **React Hooks**: To manage component state and side effects.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhiperfect/myTodo
   ```

2. Navigate to the project directory:
   ```bash
   cd task-management-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the app.

## Folder Structure

```
task-management-app/
├── src/
│   ├── components/                # Reusable components like Navbar, Sidebar, TaskCard
│   ├── context/                   # AppContext for global state management
│   ├── pages/                     # Pages like Home, TaskBoardContainer
│   ├── App.js                     # Main app component
│   ├── index.js                   # Entry point
├── public/
│   ├── index.html                 # Main HTML file
└── package.json                   # Project dependencies and scripts
```

## How to Use

### Task Board
The app consists of task columns (e.g., "To Do", "In Progress", "Completed") where you can view tasks. You can:

- Add new tasks.
- Mark tasks as done.
- Edit or delete tasks.
- Filter tasks by priority (High, Medium, Low).
- Search tasks by title or description.

### Navbar
The `Navbar` contains links to navigate through different parts of the app and also includes a button for toggling the sidebar in mobile view.

### Sidebar
The `Sidebar` is displayed on larger screens and contains links to navigate between task columns and other features.

## Contributing

Feel free to fork this repository and create pull requests if you want to contribute improvements or features.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Create a new Pull Request

## License

This project is open-source and available under the [MIT License](LICENSE).