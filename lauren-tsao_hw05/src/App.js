import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar'

import FilterPage from './pages/FilterPage'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="col-span-5">
        <Routes>
          <Route path="/" element={<FilterPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App
