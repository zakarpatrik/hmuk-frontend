import Header from "@/components/header/Header.tsx";
import { Route, Routes} from "react-router-dom";
import Home from "@/components/home/Home.tsx";
import Members from "@/components/members/Members.tsx";
import Footer from "@/components/footer/Footer.tsx";
import OfficeBearers from "@/components/office-bearers/OfficeBearers.tsx";
import CustomerRights from "@/components/customer-rights/CustomerRights.tsx";
import HowToChoose from "@/components/how-to-choose/HowToChoose.tsx";
import UsefulLinks from "@/components/useful-links/UsefulLinks.tsx";

const App = () => {
  return (
      <>
        <Header />
        <main>
          <Routes location={location}>
              <Route path="*" element={<Home />} />
              <Route path="/ugyvedkereso" element={<Members />} />
              <Route path="/tisztsegviseloink" element={<OfficeBearers />} />
              <Route path="/ugyfel-jogok" element={<CustomerRights />} />
              <Route
                  path="/hogyan-valasszunk-ugyvedet"
                  element={<HowToChoose />}
              />
              <Route path="/hasznos-linkek" element={<UsefulLinks />} />
          </Routes>
        </main>
        <Footer />
      </>
  );
}

export default App;
