// Components
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';

const Layout = ({ children }) => {
  // Assuming `sora.variable` is a CSS variable holding font properties
  const soraFontClass = 'font-sora'; // If `sora.variable` is a class name

  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${soraFontClass} relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
