import { Route, Routes } from 'react-router-dom';
import './assets/css/App.css';
import Dashboard from './pages/dashboard';
import Earthlanding from './pages/earthlanding';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Dashboard />}
        />
        <Route
          path='/earthlanding'
          element={<Earthlanding />}
        />
      </Routes>
    </div>
  );
}

export default App;
