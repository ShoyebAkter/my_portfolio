import React from 'react';
import { Card, CardGroup, Container, Row } from 'react-bootstrap';
import { ImPointRight } from 'react-icons/im';
import Particle from '../Particle';
import  img1 from '../assests/projects/computerhub/Screenshot (30).png'
import  img2 from '../assests/projects/computerhub/Screenshot (31).png'
import  img3 from '../assests/projects/computerhub/Screenshot (33).png'
import  img4 from '../assests/projects/computerhub/Screenshot (34).png'
import  img5 from '../assests/projects/computerhub/Screenshot (35).png'
import  img6 from '../assests/projects/computerhub/Screenshot (36).png'
import  img7 from '../assests/projects/computerhub/Screenshot (37).png'
import  img8 from '../assests/projects/computerhub/Screenshot (38).png'
import  img9 from '../assests/projects/computerhub/Screenshot (39).png'
import  img10 from '../assests/projects/computerhub/Screenshot (40).png'
import  img11 from '../assests/projects/computerhub/Screenshot (41).png'
import  img12 from '../assests/projects/computerhub/Screenshot (42).png'
import  img13 from '../assests/projects/computerhub/Screenshot (43).png'

const ProjectDetails2 = () => {
    return (
        <div>
            <Container fluid className="resume-section">
                <h2 style={{ textAlign: 'center', marginBottom: 10 }}>Details about Computer Hub Mern Stack Project</h2>
                <Particle />
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <CardGroup>
                    <Card className="project-card-view">
                        <Card.Img variant="top" src={img1} alt="card-img" />
                        <Card.Body>
                            <Card.Title>Home Page</Card.Title>
                            <Card.Text style={{ textAlign: "justify" }}>
                                <ImPointRight /> Homepage of Computer Hub has different section.<br />
                                <ImPointRight /> First the navbar.Navbar has many route like Home,Purchase,Blogs,Payment,MyPortfolio and Login.<br />
                                <ImPointRight /> There is a carousel top of the page with different kinds of image. <br />
                                <ImPointRight /> Second thing you will see tools section.Each tool has different name and different values.<br />
                                <ImPointRight /> Take membership section is for user if they want to take a membership <br />
                                <ImPointRight /> Right at the bottom there is a review section where peoples review has been shown.<br />
                                <ImPointRight /> And there is footer section at the bottom.
                                
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card className="project-card-view">
                        <Card.Img variant="top" src={img3} alt="card-img" />
                        <Card.Body>
                            <Card.Title>Login SignUp route</Card.Title>
                            <Card.Text style={{ textAlign: "justify" }}>
                                <ImPointRight /> Peoples have to login or signup.People can login or signup with their google account also.<br />
                                <ImPointRight /> Used firebase authentication for Gmail and Email.<br />
                                <ImPointRight /> User authentication is secure through JWT .<br />
                                <ImPointRight /> After login or signup they can get the access of the private route.<br />
                                <ImPointRight /> People can toogle between Login and SignUp form.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </CardGroup>
                </Row>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <CardGroup>
                    <Card className="project-card-view">
                        <Card.Img variant="top" src={img4} alt="card-img" />
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
                        <Card.Img variant="top" src={img5} alt="card-img" />
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
                        <Card.Img variant="top" src={img6} alt="card-img" />
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
                </Row>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <CardGroup>
                    <Card className="project-card-view">
                        <Card.Img variant="top" src={img7} alt="card-img" />
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
                        <Card.Img variant="top" src={img8} alt="card-img" />
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
                        <Card.Img variant="top" src={img9} alt="card-img" />
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
                </Row>
                
            </Container>
        </div>
    );
};

export default ProjectDetails2;