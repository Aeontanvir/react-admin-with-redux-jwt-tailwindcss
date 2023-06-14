import Footer from "./Footer";
import Header from "./Header";

const WebsiteLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main>{children}</main>

      <Footer/>
    </div>
  );
};

export default WebsiteLayout;
