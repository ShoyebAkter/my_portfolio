import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../assests/myself-removebg-preview.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container id="about" fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={5}
            style={{ paddingTop: "50px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} style={{ maxHeight: "350px",borderRadius:"50%" }} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">{"Me"}</strong>
            </h1>
            <Aboutcard />
          </Col>
          
        </Row>
        <h1 className="project-heading">
          <strong className="purple">{"</ Skillset>"} </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{"</Tools>"}</strong>
        </h1>
        <Toolstack />

        
      </Container>
    </Container>
  );
}

export default About;