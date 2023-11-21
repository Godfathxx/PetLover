import React from "react";
import { BrowserRouter as Router, Route, Routes ,Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container mt-5 pt-5 pb-3">
        <div className="d-flex flex-column text-center mb-5">
          <h4 className="text-secondary mb-3">Team Member</h4>
          <h1 className="display-4 m-0">
            Meet Our <span className="text-primary">Team Members</span>
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="team card position-relative overflow-hidden border-0 mb-4">
              <img className="card-img-top" src="D:\VIT INTERNSHIP SB-1\9d2yvc (1)\src\img\malik.jpeg" alt="" />
              <div className="card-body text-center p-0">
                <div className="team-text d-flex flex-column justify-content-center bg-light">
                  <h5>Siddhartha Malik</h5>
                  <i>Founder & CEO</i>
                </div>
              </div>
            </div>
          <div className="team card position-relative overflow-hidden border-0 mb-4">
              <img className="card-img-top" img src="D:\VIT INTERNSHIP SB-1\9d2yvc (1)\src\img\me.jpeg" alt="" />
              <div className="card-body text-center p-0">
                <div className="team-text d-flex flex-column justify-content-center bg-light">
                  <h5>Shreyash Joshi</h5>
                  <i>Co-Founder & CEO</i>
                </div>
              </div>
            </div>
          <div className="team card position-relative overflow-hidden border-0 mb-4">
              <img className="card-img-top" img src="img/team-1.jpg" alt="" />
              <div className="card-body text-center p-0">
                <div className="team-text d-flex flex-column justify-content-center bg-light">
                  <h5>Mayank Pathak</h5>
                  <i>CTO</i>
                </div>
              </div>
            </div>
          <div className="team card position-relative overflow-hidden border-0 mb-4">
              <img className="card-img-top" img src="D:\VIT INTERNSHIP SB-1\9d2yvc (1)\src\img\tanya.jpeg" alt="" />
              <div className="card-body text-center p-0">
                <div className="team-text d-flex flex-column justify-content-center bg-light">
                  <h5>Tanya Twinkle</h5>
                  <i>President</i>
                </div>
              </div>
            </div>
          </div>
          <div className="team card position-relative overflow-hidden border-0 mb-4">
          <img className="card-img-top" src="https://drive.google.com/file/d/1TZywdY3JNTtoIrOhfcu1E1XarjvkIcqa/view?usp=sharing" alt="" />
          <div className="card-body text-center p-0">
            <div className="team-text d-flex flex-column justify-content-center bg-light">
              <h5>Aaryan Singh Suryan</h5>
              <i>CFO</i>
            </div>
          </div>
        </div>
      </div>
        </div>
    </>
  );
};

export default About;
