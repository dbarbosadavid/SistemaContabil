import React from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

const AppRoutes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </RouterRoutes>
  );
};

export default AppRoutes;