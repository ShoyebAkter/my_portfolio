import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chat from '../assests/euler.png'
import computer from '../assests/rahman.png'
import car from '../assests/vic.png'

function Projects() {
  const projects = [
    {
      id: 1,
      imgPath: chat,
      path:'details',
      title: "EulerMail",
      description: `
      Create, customize, and edit professional email templates with a user-friendly drag-and-drop editor
      and send it via whatsapp or email.This platform aims to streamline data-driven decision-making for e-commerce businesses
      while providing tools to engage with customers effectively and track performance across digital channels`,
      link: "https://www.eulermail.app/",
    },
    {
      id: 2,
      imgPath: computer,
      path:'details2',
      title: "Rahman Group",
      description:`The website is a feature-rich dashboard designed to manage and analyze data related to foreign workers.
      Here one can see how many people came from different country for work,their passport &
      visa validation,which agents they use, how much they pay and also add or delete data.
      `,
      link: "https://rahman-group.vercel.app/",
    },
    {
      id: 3,
      imgPath: car,
      path:'detail2',
      title: "VIC",
      description: `This website is designed for a car manufacturing company to enhance user experience and streamline consultation bookings
      Users can select their precise location and provide all the necessary details required for confirming a consultation.
      `, 
      link: "https://vic-omega.vercel.app/",
    }
  ]
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">{"<Projects>"}</strong>
        </h1>
        <p style={{ color: "white",fontSize:30 }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {
            projects.map(project=>
              <Col md={4} className="project-card">
                <ProjectCard
                  
                  project={project}
                />
              </Col>
            )
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;