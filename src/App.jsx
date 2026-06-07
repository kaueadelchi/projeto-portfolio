import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Developer";
import Designer from "./pages/Designer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designer" element={<Designer />} />
      </Routes>
    </BrowserRouter>
  );
}