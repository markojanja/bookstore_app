import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Root = () => {
  return (
    <>
      <Navbar />
      <main className="relative grid grid-cols-[10%_minmax(90%,_1fr)] flex-1">
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
