/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Menu = ({ property1, className, homeClassName, text = "Home" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default-state",
  });

  return (
    <div
      className={`menu ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`text-wrapper ${homeClassName}`}>{text}</div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "hover-state",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default-state",
      };
  }

  return state;
}

Menu.propTypes = {
  property1: PropTypes.oneOf(["default-state", "hover-state"]),
  text: PropTypes.string,
};
