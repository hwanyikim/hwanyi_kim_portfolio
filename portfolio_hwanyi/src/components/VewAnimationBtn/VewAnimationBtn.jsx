/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const VewAnimationBtn = ({ property1, className, rectangleClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default-state",
  });

  return (
    <div
      className={`vew-animation-btn property-1-0-${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.property1 === "default-state" && (
        <>
          <img className={`rectangle ${rectangleClassName}`} alt="Rectangle" src="/img/rectangle-9-2.png" />
          <div className="view-animation-works">View Animation Works</div>
        </>
      )}

      {state.property1 === "hover-state" && (
        <div className="overlap-group">
          <img className="img" alt="Rectangle" src="/img/rectangle-9-1.png" />
          <div className="div">View Animation Works</div>
        </div>
      )}
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

VewAnimationBtn.propTypes = {
  property1: PropTypes.oneOf(["default-state", "hover-state"]),
};
