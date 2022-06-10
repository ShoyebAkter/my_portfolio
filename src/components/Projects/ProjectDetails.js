import React from 'react';
import { Button, Card, CardGroup, Carousel, Col, Container, Row } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import { BiBold, BiLinkExternal } from 'react-icons/bi';
import Particle from '../Particle';
import img1 from '../assests/projects/whatsapp1.png'
import img2 from '../assests/projects/whatsapp2.png'
import img3 from '../assests/projects/whatsapp3.png'
import { ImPointRight } from 'react-icons/im';

const ProjectDetails = () => {
    return (
        <div>
            <Container fluid className="resume-section">
                <h2 style={{ textAlign: 'center', marginBottom: 10 }}>Details about Chatting app</h2>
                <Particle />
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className='container mt-5'>
                <div className='text-primary' style={{fontSize:30}}>Features</div>
                <div style={{fontSize:20}}>
                <ImPointRight />Used Firebase for Login and authentication.<br/>
                <ImPointRight />Firebase is used for authentication and people can chat from anywhere at the same time.<br/>
                <ImPointRight /> Use date format for when  the last message was sent.<br/>
                <ImPointRight /> Use Firebase to store all the message and specific group to chat with all kind of people.
                </div>
                </div>
            </Container>
        </div>
    );
};

export default ProjectDetails;


