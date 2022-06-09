import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chat from '../assests/projects/Screenshot (10).png'
import computer from '../assests/projects/Screenshot (9).png'
import car from '../assests/projects/Screenshot (11).png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="What's app"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://chatting-app-react.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={computer}
              isBlog={false}
              title="Computer Hub"
              description="Manufacture MERN stack website build with Daisy UI and Tailwind Css which takes the content from makdown files and renders it using React.js.Has user and admin two different pannel."
              link="https://computer-hub-f78ec.web.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Car Warehouse"
              description="Online car warehouse website build with react.js.Where all the data is store in MongoDB databse.User can see the available cars and can uodate the quantity of the cars.Each user can see his/her orders and can delete them also"
              link="https://carhouse-a8546.web.app/home"
            />
          </Col>

          

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;