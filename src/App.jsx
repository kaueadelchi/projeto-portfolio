import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Developer";
import Designer from "./pages/Designer";
import Guilhi from "./pages/Guilhi";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designer" element={<Designer />} />
        <Route path="/guilhi" element={<Guilhi />} />
      </Routes>
    </HashRouter>
  );
}