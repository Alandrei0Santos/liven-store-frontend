import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { ConfigProvider, Layout, theme } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import logo from '@assets/liven-store-logo.png';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <NotFoundPage />,
    },
  ]);

  const {
    token: { borderRadiusLG },
  } = theme.useToken();

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
      <Layout className="min-h-screen">
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <a className="flex items-center" href="/">
            <div className="mr-2">
              <img src={logo} className="w-[70px] rounded-sm" alt="Liven Store Logo"></img>
            </div>
            <span className="font-nerko text-[30px]">Liven Store</span>
          </a>
        </Header>
        <Content className="mt-2" style={{ padding: '0 48px' }}>
          <div
            style={{
              background: '#000',
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <section>
            <strong>
              <span>Liven Store &copy;</span>
            </strong>
            <div>
              Made with ❤️ by <b>Alandrei Santos</b>
            </div>
          </section>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}
