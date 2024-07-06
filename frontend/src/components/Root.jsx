import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Root = () => {
  return (
    <>
      <Navbar />
      <main className="relative grid md:grid-cols-[15%_minmax(85%,_1fr)] flex-1">
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
