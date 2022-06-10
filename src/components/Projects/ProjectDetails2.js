import React from 'react';
import { Card, CardGroup, Carousel, Col, Container, Row } from 'react-bootstrap';
import { ImPointRight } from 'react-icons/im';
import img3 from '../assests/projects/computerhub/Screenshot (33).png'
import img4 from '../assests/projects/computerhub/Screenshot (34).png'
import img5 from '../assests/projects/computerhub/Screenshot (35).png'
import img8 from '../assests/projects/computerhub/Screenshot (38).png'
import img9 from '../assests/projects/computerhub/Screenshot (39).png'
import img10 from '../assests/projects/computerhub/Screenshot (40).png'

const ProjectDetails2 = () => {
    return (
        <div>
            <Container fluid className="resume-section">
                    <Row>
                        <Col xs={4}><Card.Img variant="top" src={img4} alt="card-img" /></Col>
                        <Col xs={4}><Card.Img variant="top" src={img3} alt="card-img" /></Col>
                        <Col xs={4}><Card.Img variant="top" src={img5} alt="card-img" /></Col>
                    </Row>
                    <Row>
                        <Col xs={4}><Card.Img variant="top" src={img10} alt="card-img" /></Col>
                        <Col xs={4}><Card.Img variant="top" src={img8} alt="card-img" /></Col>
                        <Col xs={4}><Card.Img variant="top" src={img9} alt="card-img" /></Col>
                    </Row>
                    <Row >
                        <Col><p> 
                        <ImPointRight />   Login or SignUp is used for user or admin to login to their respective account.<br/>
                        <ImPointRight />  After login User can see one extra route Dashboard. In Dashboard there is three route.<br/>
                        <ImPointRight />  Add review,Manage order and add profile.<br/>
                        <ImPointRight />  Add review works to add review of the website.<br/>
                        <ImPointRight />  In Manage order route,his or her all orders will display.User can delete order if he/she want.<br/>

                        </p></Col>
                    </Row>
                    <Row>
                    <Col>
                        <p>
                        <ImPointRight /> When admin logged in,admin can see Dashboard route where there is 4 extra route.<br/>
                        <ImPointRight />   Add products,Manage all order,Manage products and Make admin.<br/>
                            <ImPointRight />  In add product route,admin can add a product which will show in the home page<br/>
                            <ImPointRight />   In manage all orders,admin can see all users orders.Admin can see all the paid and unpaid orders.<br/>
                            <ImPointRight />  Manage products is for deleting any product and Make admin is for making any user admin.<br/>
                            <ImPointRight />  For user it has different route as for admin also.  
                        </p>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
};

export default ProjectDetails2;