import { Route, Routes } from 'react-router-dom';
import './assets/css/App.css';
import Dashboard from './pages/dashboard';
import Earthlanding from './pages/earthlanding';
import Doraemon from './pages/doraemon';
import PageChangeOnScroll from './pages/pagechange';
import OnScrollProgress from './pages/onscrollprogress';
import BringToSame from './pages/bringToSame';
import InfinitePageScroll from './pages/infiniteScroll';

function App() {
  const appRoutes = [
    {
      path: '/',
      component: <Dashboard />,
    },
    {
      path: '/',
      component: <Dashboard />,
    },
    {
      path: '/earthlanding',
      component: <Earthlanding />,
    },
    {
      path: '/doraemon-jump',
      component: <Doraemon />,
    },
    {
      path: '/page-scroll',
      component: <PageChangeOnScroll />,
    },
    {
      path: '/scroll-progressbar',
      component: <OnScrollProgress />,
    },
    {
      path: '/bring-to-same',
      component: <BringToSame />,
    },
    {
      path: '/infinite-scroll',
      component: <InfinitePageScroll />,
    },
    {
      path: '*',
      component: <InfinitePageScroll />,
    },
  ];
  return (
    <div>
      <Routes>
        {appRoutes?.map((item) => (
          <Route
            path={item.path}
            element={item?.component}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
