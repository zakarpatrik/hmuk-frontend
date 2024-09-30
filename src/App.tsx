import Header from "@/components/header/Header.tsx";
import Footer from "@/components/footer/Footer.tsx";
import {Outlet} from "@tanstack/react-router";

const App = () => {
  return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
  );
}

export default App;
