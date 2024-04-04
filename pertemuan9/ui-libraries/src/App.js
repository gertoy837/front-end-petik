import "bootstrap/dist/css/bootstrap.min.css";
import 'bulma/css/bulma.css'
import "./App.css";
import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TopRated from "./pages/TopRated";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/top" element={<TopRated />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
