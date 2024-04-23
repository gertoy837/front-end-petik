import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Layout from "../Layout";
import { NavLink } from "react-router-dom";
import axios from "axios";

const TableTrainer = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);
  const getCourses = async () => {
    const response = await axios.get("https://api.sukmax.my.id/trainer");
    setCourses(response.data);
  };
  return (
    <Layout>
      <h2 className="title">Trainer</h2>
      <h3 className="subtitle">List of Trainer</h3>
      <NavLink to={"/trainer/add"} className="button is-primary mb-2">
        Add New
      </NavLink>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Skill</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{course.name}</td>
                <td>{course.address}</td>
                <td>{course.skill}</td>
                {/* <td>{course.image}</td> */}
                <td>
                  <figure className="image is-64x64">
                    <img src={course.url} alt="preview-img" />
                  </figure>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Layout>
  );
};

export default TableTrainer;
