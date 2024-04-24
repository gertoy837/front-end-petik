import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Layout from "../Layout";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const TableCourse = () => {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Inisialisasi currentPage dengan 1
  const [coursesPerPage] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const response = await axios.get("https://api.sukmax.my.id/course");
    setCourses(response.data);
  };

  const lastCourse = currentPage * coursesPerPage; // Menggunakan currentPage
  const firstCourse = lastCourse - coursesPerPage;
  const currentCourses = courses.slice(firstCourse, lastCourse); // Menggunakan nama variabel yang konsisten

  const paginate = (pageNumber) => setCurrentPage(pageNumber); // Menggunakan setCurrentPage

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`https://api.sukmax.my.id/course/${id}`);
      navigate("/table-course");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h2 className="title">Courses</h2>
      <h3 className="subtitle">List of Course</h3>
      <NavLink to={"/course/add"} className="button is-primary mb-2">
        Add New
      </NavLink>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Desc</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentCourses.map((course, index) => {
            return (
              <tr key={course.id}>
                <td>{(currentPage - 1) * coursesPerPage + index + 1}</td>
                <td>{course.name}</td>
                <td>{course.desc}</td>
                <td>
                  <figure className="image is-64x64">
                    <img src={course.url} alt="preview-img" />
                  </figure>
                </td>
                <td>
                  <Link
                    to={`/course/edit/${course.id}`}
                    className="button is-info is-small"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      if (
                        window.confirm("Apakah anda yakin ingin menghapus?")
                      ) {
                        deleteCourse(course.id);
                      }
                    }}
                    className="button is-small is-danger ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div class="d-flex justify-content-end">
        <Pagination>
          <PaginationItem>
            <PaginationLink first href="#" onClick={() => paginate(1)} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              previous
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          {[...Array(Math.ceil(courses.length / coursesPerPage)).keys()].map(
            (number) => (
              <PaginationItem
                key={number + 1}
                active={number + 1 === currentPage}
              >
                <PaginationLink onClick={() => paginate(number + 1)}>
                  {number + 1}
                </PaginationLink>
              </PaginationItem>
            )
          )}
          <PaginationItem>
            <PaginationLink
              href="#"
              next
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(courses.length / coursesPerPage)
              }
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              last
              onClick={() =>
                paginate(Math.ceil(courses.length / coursesPerPage))
              }
            />
          </PaginationItem>
        </Pagination>
      </div>
    </Layout>
  );
};

export default TableCourse;
