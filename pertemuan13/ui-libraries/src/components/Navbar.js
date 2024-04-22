import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  // NavbarText,
} from "reactstrap";

function NavbarComponent(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} expand="md" className="bg-primary navbar-dark">
        <NavbarBrand className="text-light">Jual-in</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavLink
              to={"/"}
              className="text-light mx-3"
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>
            <NavLink
              to={"/dashboard"}
              className="text-light mx-3"
              style={{ textDecoration: "none" }}
            >
              Dashboard
            </NavLink>
            <NavLink
              to={"/courses"}
              className="text-light mx-3"
              style={{ textDecoration: "none" }}
            >
              Courses
            </NavLink>
          </Nav>
          <NavLink
            to={"/login"}
            className="text-light mx-3 button is-light text-dark"
            style={{ textDecoration: "none" }}
          >
            Login
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
