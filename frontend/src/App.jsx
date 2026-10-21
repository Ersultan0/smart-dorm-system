import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Dormitories from "./pages/Dormitories";
import DormitoryDetails from "./pages/DormitoryDetails";

function App() {
  const location = useLocation();

  const publicPages = ["/", "/login", "/register"];

  const showNavbar = !publicPages.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/dormitories"
          element={<Dormitories />}
        />

        <Route
          path="/dormitories/:id"
          element={<DormitoryDetails />}
        />
      </Routes>
    </>
  );
}

export default App;