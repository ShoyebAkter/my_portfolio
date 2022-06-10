import React from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import Particle from '../Particle';
import img1 from '../assests/projects/whatsapp1.png'
import img2 from '../assests/projects/whatsapp2.png'
import img3 from '../assests/projects/whatsapp3.png'
import { ImPointRight } from 'react-icons/im';

const ProjectDetails = (props) => {
    return (
        <div>
            <Container fluid className="resume-section">
                <h2 style={{ textAlign: 'center', marginBottom: 10 }}>Details about Chatting app</h2>
                <Particle />
                <CardGroup>
                    <Card className="project-card-view">
                        <Card.Img variant="top" src={img1} alt="card-img" />
                        <Card.Body>
                            <Card.Title>Login page</Card.Title>
                            <Card.Text style={{ textAlign: "justify" }}>
                                <ImPointRight /> To use this website,first you have to login.<br />
                                <ImPointRight /> Once you enter the website,there will be a google pop up.<br />
                                <ImPointRight /> The pop up will ask you to sign in with google account <br />
                                <ImPointRight /> Clicking on to the button you will see all of your google acoount<br />
                                <ImPointRight /> Then select the account you like to sign in. <br />
                                <ImPointRight /> To use this google authentication, firebase is used.<br />
                                <ImPointRight /> Once you login with your google account,you can see the inside of the website.<br />
                                <ImPointRight />  I have used Firebase authentication system to login by email.<br />
                                
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card className="project-card-view">
                        <Card.Img variant="top" src={img2} alt="card-img" />
                        <Card.Body>
                            <Card.Title>Inside of the website</Card.Title>
                            <Card.Text style={{ textAlign: "justify" }}>
                                <ImPointRight /> Once you have logged in it will take you to the home page.<br />
                                <ImPointRight /> In this page you will find left sidebar and right chat section.<br />
                                <ImPointRight /> Left sidebar where you will see different group,search group name<br />
                                <ImPointRight /> In the right chat section is where you will type your message and chat with people.<br />
                                <ImPointRight /> Once you have logged in with your google account you can see your pic in the left top corner of this page.<br/>
                                <ImPointRight /> I have used Material UI icons for all of the icons. <br/>
                                <ImPointRight /> I have used Material UI as CSS Library for this project.
                            </Card.Text>      
                        </Card.Body>
                    </Card>
                    <Card className="project-card-view">
                        <Card.Img variant="top" src={img3} alt="card-img" />
                        <Card.Body>
                            <Card.Title>Chatting group</Card.Title>
                            <Card.Text style={{ textAlign: "justify" }}>
                                <ImPointRight /> Once you have clicked on to any of the group in left sidebar you will open the group.<br />
                                <ImPointRight /> After opening the group chat in the chat section you will see different things.<br />
                                <ImPointRight /> At the top of the chat section you will see the group name and the time of the last message.<br />
                                <ImPointRight /> You will also see the message from different people and also the time of when the message was sent/<br />
                                <ImPointRight /> At the bottom of the section you will see the message bar where you can type your message.<br/>
                                <ImPointRight /> To store all the messages I used firebase firestore.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default ProjectDetails;