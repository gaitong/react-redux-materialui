import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AddUser from "./Pages/AddUser";
import EditUser from "./Pages/EditUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/adduser" element={<AddUser />} />
        <Route exact path="/edituser/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
