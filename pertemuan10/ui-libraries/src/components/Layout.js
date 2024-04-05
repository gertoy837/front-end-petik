import React from "react";
import NavbarComponent from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <div>
      <React.Fragment>
        <NavbarComponent />
        <div class="columns">
          <div class="column is-2">
            <Sidebar />
          </div>
          <div class="column has-background-light">
            <main class="mt-5">{children}</main>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    </div>
  );
};

export default Layout;
