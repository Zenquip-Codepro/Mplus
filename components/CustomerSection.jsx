import React from "react";
import "../src/styles/CustomerSection.css";

const CustomerSection = () => {
  return (
    <div className="customer-container">
      <div className="customer-content">
        <div className="customer-image">
          <img
            src="https://img.freepik.com/free-vector/friends-logo-template_23-2149505594.jpg?t=st=1732606425~exp=1732610025~hmac=4fa0410d53e98ffbaf581ff4bcdf95d5f87dcdc2a26172765b0f5fbb3d950f8d&w=740"
            alt="Tesla Logo"
            className="logo-img"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="customer-text">
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit.
          </p>
          <p>
            Suspendisse cursus tellus sed augue ultrices, quis tristique nulla
            sodales. Suspendisse eget lorem eu turpis vestibulum pretium.
            <br />
            <br />
            <strong className="customer-name">Tim Smith</strong>
            <br />
            British Dragon Boat Racing Association
          </p>
          <div className="customer-logos">
            <div className="logo-item">🌸</div>
            <div className="logo-item">👁️</div>
            <div className="logo-item">🚗</div>
            <div className="logo-item">🎨</div>
            <div className="logo-item">🔗</div>
            <div className="customer-link">
              <a href="/">Meet all customers →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSection;
