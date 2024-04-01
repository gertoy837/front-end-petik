// import Navbar from "./components/Navbar/Navbar";
// import User from "./components/User/User";
// import Footer from "./components/Footer/Footer";
// import Main from "./components/Main/Main";
// import Car from "./components/Car/Car";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Popular from "./pages/movie/Popular.js";
import TopReated from "./pages/movie/TopReated.js";
import Detail from "./pages/movie/Detail.js";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top" element={<TopReated />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Footer nama="Mahardika"/>
      </BrowserRouter>
    </div>
  );
}

export default App;
