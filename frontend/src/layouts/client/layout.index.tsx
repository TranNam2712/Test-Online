import Header from "./header.client";
import { Outlet } from "react-router-dom";
import Footer from "./footer.client";

const LayoutClient = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header>
        <Header />
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LayoutClient;
