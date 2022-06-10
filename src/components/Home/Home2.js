import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../assests/my-removebg-preview.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-section home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} sm={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> TELL YOU ABOUT </span> MY JOURNEY AS A PROGRAMMER
            </h1>
            <p className="home-about-body">
              I wrote my first code back in 2019.Back then I used to memorized code.Now I love programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I love web development and 
              <i>
                <b className="purple"> I am a fan of React </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Websites</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          {/* <Col md={4} sm={6} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" style={{ maxHeight: "350px",borderRadius:"50%" }} alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;