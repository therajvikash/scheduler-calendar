import React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";
import RoomScheduler from "./components/scheduler/RoomScheduler";

function App() {
  return (
    <div className='App'>
      <RoomScheduler />
    </div>
  );
}

export default App;
