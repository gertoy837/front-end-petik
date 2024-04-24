import React, { useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTrainer = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [skill, setSkill] = useState("");
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
        "https://api.sukmax.my.id/trainer",
        {
          name: name,
          address: address,
          skill: skill,
          file: file,
        },
        //   agar bisa upload file
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      //   redirect ke /table-course
      navigate("/table-trainer");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <h2 className="title">Trainer</h2>
      <h3 className="subtitle">Add New Trainer</h3>
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
          <label class="label">Address</label>
          <div class="control">
            <input
              class="input"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Text input"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Skill</label>
          <div class="control">
            <input
              class="input"
              type="text"
              onChange={(e) => setSkill(e.target.value)}
              placeholder="Text input"
            />
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

export default AddTrainer;
