import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/menu.png";

const Login = () => {
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
                  <h3 className="title has-text-primary">Login</h3>
                </div>
                <div class="field">
                  <label for="email" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Masukkan Email"
                  />
                </div>
                <div class="field" className="label">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="************"
                  />
                </div>
                <div class="field">
                  <button className="button has-text-white is-success is-fullwidth">
                    Login
                  </button>
                </div>
                <div class="field">
                  <p>
                    Belum punya akun? <NavLink to={"/register"}>Daftar</NavLink>
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

export default Login;
