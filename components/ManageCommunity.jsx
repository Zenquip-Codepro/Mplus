import React from "react";
import "../src/styles/CommunitySection.css";

const CommunitySection = () => {
  const data = [
    {
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and paymentsmembership renewals and payments",
      icon: "https://img.freepik.com/free-vector/friends-logo-template_23-2149505594.jpg?t=st=1732606425~exp=1732610025~hmac=4fa0410d53e98ffbaf581ff4bcdf95d5f87dcdc2a26172765b0f5fbb3d950f8d&w=740",
    },
    {
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments membership renewals and payments",
      icon: "https://img.freepik.com/free-vector/friends-logo-template_23-2149505594.jpg?t=st=1732606425~exp=1732610025~hmac=4fa0410d53e98ffbaf581ff4bcdf95d5f87dcdc2a26172765b0f5fbb3d950f8d&w=740",
    },
    {
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments membership renewals and payments",
      icon: "https://img.freepik.com/free-vector/friends-logo-template_23-2149505594.jpg?t=st=1732606425~exp=1732610025~hmac=4fa0410d53e98ffbaf581ff4bcdf95d5f87dcdc2a26172765b0f5fbb3d950f8d&w=740",
    },
  ];

  return (
    <section className="community-section">
      <div className="container">
        <h2 className="section-title">
          Manage your entire community <br /> in a single system
        </h2>
        <p className="section-subtitle">Who is Nextcent suitable for?</p>
        <div className="cards-container">
          {data.map((item, index) => (
            <div key={index} className="card">
              <div className="icon">
                <img src={item.icon} alt="" className="logoicon" />
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
