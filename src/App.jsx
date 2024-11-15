import React, { Fragment } from "react";
import Home from "./pages/Home";

// Memoize Home component to prevent unnecessary re-renders
const MemoizedHome = React.memo(Home);

function App() {
  return (
    <Fragment>
      <MemoizedHome />
    </Fragment>
  );
}

export default App;
