import React, { useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [name, setName] = useState("");
  const [trainerId, settrainerId] = useState(1);
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveCourse = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://api.sukmax.my.id/course",
        {
          name: name,
          trainer_id: trainerId,
          desc: desc,
          file: file,
        },
        //   agar bisa upload file
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      //   redirect ke /table-course
      navigate("/table-course");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <h2 className="title">Courses</h2>
      <h3 className="subtitle">Add New Course</h3>
      <form onSubmit={saveCourse}>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama course"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Trainer Id</label>
          <div class="control">
            <input
              class="input"
              type="text"
              onChange={(e) => settrainerId(e.target.value)}
              placeholder="Text input"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea
              name=""
              className="textarea"
              id=""
              cols="30"
              rows="10"
              onChange={(e) => setDesc(e.target.value)}
              placeholder="e.g. Hello World"
            ></textarea>
          </div>
        </div>

        <div class="file">
          <label class="file-label">
            <input
              class="file-input"
              type="file"
              name="resume"
              onChange={loadImage}
            />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label"> Choose a file… </span>
            </span>
          </label>
        </div>

        {preview ? (
          <figure className="image is-128x128">
            <img src={preview} alt="preview-img" />
          </figure>
        ) : (
          ""
        )}

        <div class="field is-grouped mt-5">
          <div class="control">
            <button type="submit" class="button is-link">
              Submit
            </button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default AddCourse;
