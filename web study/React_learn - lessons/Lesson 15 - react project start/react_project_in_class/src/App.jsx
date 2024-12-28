import Footer from "./components/footer";
import Header from "./components/header";
import About from "./pages/about";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/signUp";
import SignOut from "./pages/sign_Out";

function App() {
  return (
    <div className="app min-vh-100 d-flex flex-column gap-2 ">
      <Header />
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
