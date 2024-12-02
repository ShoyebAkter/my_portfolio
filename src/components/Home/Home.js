
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import About from "../About/About";
import homeLogo from "../assests/myself-removebg-preview.png";
import ContactForm from "../Contact/ContactForm";

import Particle from "../Particle";
import Projects from "../Projects/Projects";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
          <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "350px",borderRadius:"50%" }}
              />
            </Col>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi {" Everyone"}
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Shoyeb Akter</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            
          </Row>
        </Container>
      </Container>
      <Home2 />
      <About />
        <Projects/>
        <ContactForm/>
    </section>
  );
}

export default Home;
