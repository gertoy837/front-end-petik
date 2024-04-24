import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailCourse = () => {
    let { id } = useParams();
    const [courses, setCourses] = useState([]);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");


    useEffect(() => {
      getCourseById();
    }, [id]);

    const getCourseById = async () => {
      const response = await axios.get(`https://api.sukmax.my.id/course/${id}`);
      setCourses(response.data);
      setName(response.data.name);
      setDesc(response.data.desc);
    };
  return (
    <section className="section mt-5">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <figure className="image is4by3">
              <img src={courses.url} alt={courses.image} />
            </figure>
          </div>
          <div className="column">
            <div className="content">
              <div className=" title is-4">{name}</div>
              <p>
                {desc}
              </p>
              <div class="field p-5">
                <button className="button is-primary is-fullwidth has-text-white mb-3">Add to cart</button>
                <button className="button is-primary is-outlined is-fullwidth">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailCourse;
