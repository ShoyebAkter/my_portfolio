import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { ImPointRight } from 'react-icons/im';
import Particle from '../Particle';
import img1 from '../assests/projects/Screenshot (36).png'
import img2 from '../assests/projects/Screenshot (37).png'
import img3 from '../assests/projects/Screenshot (38).png'

const ProjectDetail2 = () => {
    return (
        <div>
            <Container fluid className="resume-section">
                <h2 style={{ textAlign: 'center', marginBottom: 10 }}>Car House MERN Stack website</h2>
                <Particle />
                <CardGroup>
                    <Card className="project-card-view">
                        <Card.Img variant="top" src={img1} alt="card-img" />
                        <Card.Body>
                            <Card.Title>Add Car Route</Card.Title>
                            <Card.Text style={{ textAlign: "justify" }}>
                                <ImPointRight /> After login,user can see add car route<br />
                                <ImPointRight /> Add car route is basically for adding a car which will display on the home page.<br />
                                <ImPointRight /> Adding a car will hit an Api and add valuable information. <br />
                                <ImPointRight /> To access into this route user must have to login.As it is a private route.<br />
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card className="project-card-view">
                        <Card.Img variant="top" src={img2} alt="card-img" />
                        <Card.Body>
                            <Card.Title>Manage Inventory</Card.Title>
                            <Card.Text style={{ textAlign: "justify" }}>
                                <ImPointRight /> User must have to login to get access in this route.<br />
                                <ImPointRight /> Manage Inventory route will show all the products name,price and a delete button.<br />
                                <ImPointRight /> Delete button will hit an API if it is clicked.<br />
                                <ImPointRight /> After clicking the delete button the product will be deleted from the page and also from the database.<br />
                                <ImPointRight /> The database I used for this product is MongoDB.<br/>
                            </Card.Text>      
                        </Card.Body>
                    </Card>
                    <Card className="project-card-view">
                        <Card.Img variant="top" src={img3} alt="card-img" />
                        <Card.Body>
                            <Card.Title>Chatting group</Card.Title>
                            <Card.Text style={{ textAlign: "justify" }}>
                                <ImPointRight /> MyDeleveryItems route is also a private route.<br />
                                <ImPointRight /> In this route user can see his/her email ,what car is ordered and also a delete button.<br />
                                <ImPointRight /> Particular user only can see his/her order not all users order.<br />
                                <ImPointRight /> User can delete his/her order if they want.After deleting the order it will be deleted from database also.<br />
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default ProjectDetail2;