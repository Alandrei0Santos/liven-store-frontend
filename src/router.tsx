import { createBrowserRouter, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import NotFoundPage from './pages/NotFoundPage';
import AppHeader from './components/@layout/AppHeader';
import { Content } from 'antd/es/layout/layout';
import AppFooter from './components/@layout/AppFooter';

const router = createBrowserRouter([
  {
    element: (
      <>
        <AppHeader />
        <Content className="px-12 mt-2 mb-2">
          <div className="bg-black p-6 rounded-lg min-h-[500px] h-[80vh]">
            <Outlet />
          </div>
        </Content>
        <AppFooter />
      </>
    ),
    children: [
      {
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: '/cart',
            element: <ShoppingCartPage />,
          },
          {
            path: '*',
            element: <NotFoundPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
