import React from "react";
import "remixicon/fonts/remixicon.css";
import "animate.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Doctor from "./components/Doctor";
import Patient from "./components/Patient";
import Device from "./components/Device";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/device" element={<Device />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
