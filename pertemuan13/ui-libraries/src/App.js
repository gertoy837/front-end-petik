import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Detail from './pages/Detail';
import DetailCourses from './pages/DetailCourses';
import Course from "./pages/Course";
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
        <Route path="/courses" element={<Course />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/course/:id" element={<DetailCourses />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
