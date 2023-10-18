import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar2.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaMixcloud } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              🎉 Hey there, welcome to my double-life: I am your go-to Freelancer by day and the DJ who sets your nights on fire! 🎧
              <i>
                <b className="purple"> From perfecting your brand's online presence and crafting jaw-dropping visuals to dropping the beat at your next event, I'm the Swiss Army knife of creativity you didn't know you needed. </b>
              </i>
              Imagine a world where your social media campaigns are as electrifying as my DJ sets—sounds amazing, right? Let’s turn that vision into reality. &nbsp;
              <i>
              </i>
              <br />
              <br />
              Whether you’re hunting for a one-stop digital guru or someone who can pump up the volume and the energy, look no further. I've got your project and your playlist covered. 🎶🛠
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://facebook.com/dj.bazio"
                style={{ color: "white" }}
                target="_blank" 
                rel="noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/yaak_thai/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/baziovip/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.mixcloud.com/DJBazio2/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noreferrer"
              >
                <FaMixcloud />
              </a>
            </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
