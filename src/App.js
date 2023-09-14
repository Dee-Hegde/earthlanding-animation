import { Route, Routes } from 'react-router-dom';
import './assets/css/App.css';
import Dashboard from './pages/dashboard';
import Earthlanding from './pages/earthlanding';
import Doraemon from './pages/doraemon';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Dashboard />}
        />
        <Route
          path='/earthlanding'
          element={<Earthlanding />}
        />
        <Route
          path='/doraemon-jump'
          element={<Doraemon />}
        />
      </Routes>
    </div>
  );
}

export default App;
