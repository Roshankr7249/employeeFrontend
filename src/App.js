import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
    <h1>Hello</h1>
      
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;