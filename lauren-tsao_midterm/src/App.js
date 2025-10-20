import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ZodiacPage from "./pages/ZodiacPage";
import HomePage from "./pages/HomePage";
// import TestPage from "./pages/TestZodiacPage"; <-- FOR TESTING

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:zodiacSign" element={<ZodiacPage />} />
        {/* the ':' is part of useParams
        it is a catch-all bucket = capturing whatever zodiacSign that goes into it
        and then displaying the page with the same name as the zodiacSign*/}

        {/* FOR TESTING (retrieve from test-components-pages folder and put into src*/}
        {/* <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<TestPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

