import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/home";
import { Dash } from "../pages/DashBoard/Dash";

export function RouterMain() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/dashboard" element={<Dash />}></Route>
    </Routes>
  );
}
