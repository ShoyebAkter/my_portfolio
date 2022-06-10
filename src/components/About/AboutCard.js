import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shoyeb Akter </span>
            from <span className="purple"> Chattogram, Bangladesh.</span>
            <br />I am a junior front end developer studying at Bangladesh Army University of Science And Technology.
            <br />
            <br />
            During the pandemic,I heard about Web development.I had no knowledge about it that time.<br/>
            After 6 month, completing my web development bootcamp,I got to know more about it and I want to work more on my skills.
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Know your limits and go beyond that limit"{" "}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;