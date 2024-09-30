import Header from "@/components/header/Header.tsx";
import Footer from "@/components/footer/Footer.tsx";
import {Outlet, ScrollRestoration} from "@tanstack/react-router";

const App = () => {
  return (
      <>
        <Header />
        <ScrollRestoration />
        <Outlet />
        <Footer />
      </>
  );
}

export default App;
