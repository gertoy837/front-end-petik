import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Detail from './pages/Detail';
import DetailCoursePage from './pages/DetailCoursePage';
import Course from "./pages/Course";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bulma/css/bulma.css'
import "./App.css";
import AddCourse from './components/course/AddCourse';
import TableCourse from './components/course/TableCourse';
import NotFound from './components/NotFound';


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
        <Route path="/course/:id" element={<DetailCoursePage />} />
        <Route path="/course/add" element={<AddCourse />} />
        <Route path="/table-course" element={<TableCourse />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
