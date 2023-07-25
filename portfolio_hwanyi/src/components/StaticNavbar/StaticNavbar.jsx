/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { NavbarMenu } from "../NavbarMenu";
import "./style.css";

export const StaticNavbar = ({ property1, className }) => {
  return (
    <div className={`static-navbar ${className}`}>
      <div className="frame-3">
        <NavbarMenu className="navbar-menu-instance" property1="default-state" text="Home" />
        <NavbarMenu className="navbar-menu-instance" property1="default-state" text="About" />
        <div className="frame-4">
          <NavbarMenu className="design-component-instance-node" property1="default-state" text="Portfolio" />
          <img className="arrow" alt="Arrow" src="/img/arrow-2.png" />
        </div>
        <NavbarMenu className="navbar-menu-2" property1="default-state" text="Skills" />
        <NavbarMenu className="navbar-menu-3" property1="default-state" text="CV" />
        <NavbarMenu className="navbar-menu-4" property1="default-state" text="Contact" />
      </div>
    </div>
  );
};

StaticNavbar.propTypes = {
  property1: PropTypes.oneOf(["default-state"]),
};
