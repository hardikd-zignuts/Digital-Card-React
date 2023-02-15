import React from "react";
import "./about.css";

const About = (props) => {
  return (
    <div className="about">
      <h4 className="title">{props.title}</h4>
      <div className="intro">{props.introduction}</div>
    </div>
  );
};

export default About;
