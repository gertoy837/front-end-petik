import React from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCards";

const Course = () => {
  return (
    <div>
      <NavbarComponent />
      <CourseCard />
      <Footer />
    </div>
  );
};

export default Course;
