import React from "react";

import profilePicture from "../images/profile-pic.jpeg";
import linkedinIcon from "../images/icons/linkedin.svg";
import githubIcon from "../images/icons/github-square.svg";

import "./styles/IdentityCard.css";

const IdentityCard = () => {
  return (
    <div className="identity-card">
      <img className="profile-pic" src={profilePicture} alt="Srijan Nayak"/>
      <span className="name">Srijan Nayak</span>
      <section className="course-details">
        <span className="student-year">2nd year B. Tech</span>
        <span className="course-name">Computer Engineering (Data Science)</span>
      </section>
      <section className="social-links">
        <div className="social-link">
          <a href="https://www.linkedin.com/in/srijannayak">
             linkedin.com/in/srijannayak
          </a>
          <img src={linkedinIcon} alt="LinkedIn"/>
        </div>
        <div className="social-link">
          <a href="https://www.github.com/srijan-nayak">
            github.com/srijan-nayak
          </a>
          <img src={githubIcon} alt="LinkedIn"/>
        </div>
      </section>
    </div>
  );
};

export default IdentityCard;
