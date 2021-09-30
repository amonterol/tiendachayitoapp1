import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <NavBar />
      {children}

      <Footer />
    </div>
  );
}

export default Layout;
