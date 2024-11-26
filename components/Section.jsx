import React from "react";
import "../src/styles/Section.css";

const Section = () => {
  return (
    <div className="section-container">
      <div className="section-content">
        <div className="illustration">
          <img
            src="https://img.freepik.com/free-vector/friends-logo-template_23-2149505594.jpg?t=st=1732606425~exp=1732610025~hmac=4fa0410d53e98ffbaf581ff4bcdf95d5f87dcdc2a26172765b0f5fbb3d950f8d&w=740"
            alt="Illustration"
            className="illustration-img"
          />
        </div>

        <div className="text-content">
          <h2 className="section-heading">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo lorem. Sed accumsan quam et nisi varius fringilla.
            Pellentesque placerat vestibulum enim vel porta. Nullam mattis
            tristique lacus, non viverra purus.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
