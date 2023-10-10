import Footer from "./Footer";
import Navbar from "./Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen p-0 bg-white text-black">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
