import Footer from "./components/footer";
import Header from "./components/header";
import About from "./pages/about";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";

function App() {
  return (
    <div className="app min-vh-100 d-flex flex-column gap-2 ">
      <Header />
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
