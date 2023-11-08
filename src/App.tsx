import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import EmployeeRegistrationPage from './pages/EmployeeRegistrationPage';
import EmployeeSearchPage from './pages/EmployeeSearchPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1></h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registration" element={<EmployeeRegistrationPage />} />
            <Route path="/search" element={<EmployeeSearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
