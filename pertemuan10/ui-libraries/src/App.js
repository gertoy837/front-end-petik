import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Detail from './pages/Detail';
import TopRated from "./pages/TopRated";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bulma/css/bulma.css'
import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/top" element={<TopRated />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
