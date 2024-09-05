import { Layout, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import logo from '@assets/liven-store-logo.png';
import { Link, useLocation } from 'react-router-dom';

const { Header } = Layout;

export default function AppHeader() {
  const location = useLocation();

  return (
    <Header className="flex items-center justify-between px-4">
      {/* Logo linking to home */}
      <Link to="/" className="flex items-center">
        <div className="mr-2">
          <img src={logo} className="w-[70px] rounded-sm" alt="Liven Store Logo" />
        </div>
        <span className="font-nerko text-[30px] text-white">Liven Store</span>
      </Link>

      {/* If located on '/cart' route, remove button, else go back shopping */}
      {location.pathname !== '/cart' ? (
        <Link to="/cart">
          <Button type="primary" shape="round" icon={<ShoppingCartOutlined />} size="large">
            Go to Cart
          </Button>
        </Link>
      ) : (
        <Link to="/">
          <Button type="primary" shape="round" size="large">
            Go Back Shopping! 😀
          </Button>
        </Link>
      )}
    </Header>
  );
}
