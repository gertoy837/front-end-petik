import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/menu.png";

const Register = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form className="box">
                <div class="field has-text-centered">
                  <NavLink to={"/"}>
                    <img src={logo} alt="logo" width={124} />
                  </NavLink>
                  <h3 className="title has-text-primary">Register</h3>
                </div>
                <div class="field">
                  <label for="nama" className="label">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="nama"
                    className="input"
                    placeholder="Masukkan Nama"
                  />
                </div>
                <div class="field">
                  {/* input role user */}
                  <input type="hidden" />
                </div>
                <div class="field">
                  <label for="email" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input"
                    placeholder="Masukkan Email"
                  />
                </div>
                <div class="field" className="label">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="input"
                    placeholder="************"
                  />
                </div>
                <div class="field" className="label">
                  <label for="confpassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confpassword"
                    className="input"
                    placeholder="************"
                  />
                </div>
                <div class="field">
                  <button className="button has-text-white is-success is-fullwidth">
                    Register
                  </button>
                </div>
                <div class="field">
                  <p>
                    Sudah punya akun? <NavLink to={"/login"}>Login</NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
