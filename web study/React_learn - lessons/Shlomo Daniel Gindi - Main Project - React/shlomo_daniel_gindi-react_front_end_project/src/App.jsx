import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import AboutUs from "./components/pages/aboutUs";
import Content from "./components/pages/content";
import CaseDetailsPage from "./components/pages/CaseDetailsPage";
import Registration from "./components/pages/registration";
import LogIn from "./components/pages/logIn";
import CreateNewCard from "./components/pages/createNewCard";

import MyCases from "./components/pages/myCards";
import { createContext, useState } from "react";
import { AuthProvider } from "./context/auth.context";
import UserDetailsCase from "./components/pages/userDetailsCase";
import UrgentCases from "./components/pages/urgentCases";
import { ThemeModeProvider } from "./context/theme.context";

export const SearchContext = createContext();

function App() {
  const [isShow, setIsShow] = useState(false);
  const SetModalShow = createContext();

  const [searchInput, setSearchInput] = useState("");

  return (
    <AuthProvider>
      <ThemeModeProvider>
        <SetModalShow.Provider value={{ isShow, setIsShow }}>
          <div className=" d-flex flex-column" style={{ height: "100vh" }}>
            <SearchContext.Provider value={{ searchInput, setSearchInput }}>
              <Navbar />
              <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/pages/myCards.jsx" element={<MyCases />} />
                <Route
                  path="/pages/urgentCases.jsx"
                  element={<UrgentCases />}
                />
                <Route
                  path="/pages/userDetailsCase.jsx"
                  element={<UserDetailsCase />}
                />
                <Route
                  path="/pages/createNewCard.jsx"
                  element={<CreateNewCard />}
                />
                <Route path="/pages/aboutUs.jsx" element={<AboutUs />} />
                <Route
                  path="/pages/CaseDetailsPage.jsx"
                  element={<CaseDetailsPage />}
                />
                <Route
                  path="/pages/registration.jsx"
                  element={<Registration />}
                />
                <Route path="/pages/logIn.jsx" element={<LogIn />} />
              </Routes>

              <Footer />
            </SearchContext.Provider>
          </div>
        </SetModalShow.Provider>
      </ThemeModeProvider>
    </AuthProvider>
  );
}

export default App;
