import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/home";

export function RouterMain() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
  );
}
