import { useShoppingCart } from '../context/ShoppingCartContext';
import { Table, Button, Card } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { CartItem } from '../resources/interfaces/state/cart-item.interface';

const ShoppingCart = () => {
  const { cartItems, removeItemFromCart, incrementItemQuantity, decrementItemQuantity } =
    useShoppingCart();

  const columns: ColumnsType<CartItem> = [
    {
      title: 'Product',
      dataIndex: 'title',
      key: 'title',
      render: (_, item) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={item.image} alt={item.title} className="w-[50px] mr-10" />
          <span>{item.title}</span>
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${price.toFixed(2)}`,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (_, item) => (
        // Increase or decrease products
        <div>
          <Button onClick={() => decrementItemQuantity(item.id)}>-</Button>
          <span style={{ margin: '0 10px' }}>{item.quantity}</span>
          <Button onClick={() => incrementItemQuantity(item.id)}>+</Button>
        </div>
      ),
    },
    {
      title: 'Total',
      key: 'total',
      render: (_, item) => <span>${(item.price * item.quantity).toFixed(2)}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, item) => (
        // Remove item
        <Button danger onClick={() => removeItemFromCart(item.id)}>
          Remove
        </Button>
      ),
    },
  ];

  return (
    <Card className="max-w-[900px]">
      <div>
        <header className="mb-5">
          <h1 className="text-base sm:text-3xl">Your Shopping Cart</h1>
        </header>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <Table
            dataSource={cartItems}
            columns={columns}
            rowKey="id"
            pagination={false}
            scroll={{ x: true }}
          />
        )}
      </div>
    </Card>
  );
};

export default ShoppingCart;
