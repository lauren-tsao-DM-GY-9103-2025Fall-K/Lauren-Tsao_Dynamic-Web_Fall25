import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";

import FilterPage from "./pages/FilterPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="col-span-5">
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/projects" element={<FilterPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
