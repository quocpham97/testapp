import React from "react";
import "./App.css";
import Form from "./components/form";

function App() {
  return (
    <div className="App">
      <header className="flex flex-col justify-center items-center text-gray-600 min-h-screen">
        <Form />
      </header>
    </div>
  );
}

export default App;
