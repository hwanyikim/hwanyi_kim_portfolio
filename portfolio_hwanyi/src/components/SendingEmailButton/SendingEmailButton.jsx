/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SendingEmailButton = ({ property1, className }) => {
  return (
    <img
      className={`sending-email-button ${className}`}
      alt="Property"
      src={property1 === "hover-state" ? "/img/property-1-hoverstate.png" : "/img/property-1-defaultstate.png"}
    />
  );
};

SendingEmailButton.propTypes = {
  property1: PropTypes.oneOf(["default-state", "hover-state"]),
};
