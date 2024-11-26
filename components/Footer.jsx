import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Copyright */}
        <div className="footer-section">
          <h2 className="footer-logo">
            <img
              src="https://www.logodee.com/wp-content/uploads/2022/10/logo-maker-free-vector-file-download.jpg"
              alt="logo"
              style={{
                height: "40px",
                width: "80px",
              }}
            />
            <span> Nexcent</span>
          </h2>
          <p className="footer-text">
            Copyright © 2020 Nexcent Ltd. <br />
            All rights reserved.
          </p>
          <div className="social-icons">
            <a href="#" className="social-link">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                alt=""
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </a>
            <a href="#" className="social-link">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                alt=""
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </a>
            <a href="#" className="social-link">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                alt=""
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </a>
            <a href="#" className="social-link">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                alt=""
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Support</h3>
          <ul className="footer-links">
            <li>
              <a href="#">Help center</a>
            </li>
            <li>
              <a href="#">Terms of service</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
          </ul>
        </div>

        {/* Stay Updated */}
        <div className="footer-section">
          <h3 className="footer-heading">Stay up to date</h3>
          <div className="email-subscription">
            <input
              type="email"
              placeholder="Your email address"
              className="email-input"
            />
            <button className="email-button">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
