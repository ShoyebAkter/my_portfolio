import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards({project}) {
  const {github,title,description,link,imgPath,path}=project;
  const navigate=useNavigate();

  const detailInfo=()=>{
    navigate(`/${path}`)
  }
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <Button variant="primary"  href={link} target="_blank">
          <BiLinkExternal /> &nbsp;
          { "Project"}
        </Button>
        <Button style={{marginLeft:10}} variant="primary" onClick={detailInfo}>
          <BiLinkExternal /> &nbsp;
          { "Details"}
        </Button>
        <Button style={{marginTop:5}} href={github} variant="primary" target="_blank">
          <BiLinkExternal /> &nbsp;
          { "Github"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;