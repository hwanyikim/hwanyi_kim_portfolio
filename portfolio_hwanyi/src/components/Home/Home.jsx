/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Home = ({ property1, className }) => {
  return (
    <div className={`home ${property1} ${className}`}>
      <div className="overlap-group-2">
        <div className="ellipse" />
        <div className="ellipse-2" />
        {property1 === "delayed-state" && (
          <div className="frame">
            <div className="hi-i-m-hwanyi">Hi, I’m Hwanyi</div>
            <p className="an-artist-animator">
              <span className="span">An artist, animator and</span>
              <span className="text-wrapper-2">&nbsp;</span>
              <span className="text-wrapper-3">UI/UX designe</span>
              <span className="text-wrapper-4">r</span>
              <span className="text-wrapper-2">&nbsp;</span>
            </p>
          </div>
        )}
      </div>
      <div className="overlap">
        {property1 === "main" && (
          <>
            <div className="ellipse-3" />
            <div className="frame-2">
              <div className="hi-i-m-hwanyi-2">Hi, I’m Hwanyi</div>
              <p className="p">
                <span className="text-wrapper-2">An artist, animator and </span>
                <span className="text-wrapper-4">UI/UX designer </span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Home.propTypes = {
  property1: PropTypes.oneOf(["delayed-state", "main"]),
};
