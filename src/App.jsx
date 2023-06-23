import { useState } from "react";
import Home from "./pages/Home";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Login } from "./pages/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Login/>
    </div>
  );
}

export default App;
