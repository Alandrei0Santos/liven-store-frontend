import { Layout } from 'antd';

export default function AppFooter() {
  const { Footer } = Layout;

  return (
    <Footer className="text-center">
      <section>
        <strong>
          <span>Liven Store &copy;</span>
        </strong>
        <div>
          Made with ❤️ by <b>Alandrei Santos</b>
        </div>
      </section>
    </Footer>
  );
}
