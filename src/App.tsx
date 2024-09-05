import { ConfigProvider, Layout, theme } from 'antd';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { RouterProvider } from 'react-router-dom';
import router from './router';

export default function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        components: {
          Layout: {
            colorBgLayout: '#282828',
            footerBg: '#000',
          },
        },
      }}
    >
      <ShoppingCartProvider>
        <Layout className="min-h-screen">
          <RouterProvider router={router} />
        </Layout>
      </ShoppingCartProvider>
    </ConfigProvider>
  );
}
