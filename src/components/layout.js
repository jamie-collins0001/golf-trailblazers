import { Outlet } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;