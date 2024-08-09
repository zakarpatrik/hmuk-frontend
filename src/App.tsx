import Header from "@/components/header/Header.tsx";
import { Route, Routes} from "react-router-dom";
import Home from "@/components/home/Home.tsx";

function App() {
  return (
      <>
        <Header />
        <main>
          <Routes location={location}>
              <Route path="/" element={<Home />} />
              {/*<Route path="/ugyvedkereso" element={<Members />} />*/}
              {/*<Route path="/tisztsegviseloink" element={<OfficeBearers />} />*/}
              {/*<Route path="/ugyfel-jogok" element={<CustomerRights />} />*/}
              {/*<Route*/}
              {/*    path="/hogyan-valasszunk-ugyvedet"*/}
              {/*    element={<HowToChoose />}*/}
              {/*/>*/}
              {/*<Route path="/hasznos-linkek" element={<ImportantLinks />} />*/}
          </Routes>
        </main>
      </>
  );
}

export default App;
