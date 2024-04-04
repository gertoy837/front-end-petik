import React from "react";

const Login = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form className="box">
                <h3 className="title has-text-primary">Login</h3>
                <div class="field">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Masukkan Email"
                  />
                </div>
                <div class="field">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Masukkan Password"
                  />
                </div>
                <div class="field">
                  <button className="button is-success is-fullwidth">
                    Login
                  </button>
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
