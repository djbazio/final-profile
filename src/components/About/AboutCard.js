import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pongsin Pongwachirint</span>
            from <span className="purple"> Bangkok, Thailand. </span>
            By day, I am your dedicated Freelancer, weaving digital narratives that elevate brands, and by night, I transition into a vibrant DJ, setting the stage alight with rhythmic beats. When I'm not immersed in code or music, you might find me exploring new places, honing my tech blogging skills, or diving into the gaming world.
            My life is a unique blend of digital artistry, musical exhilaration, and boundless exploration, striving to create memorable experiences both online and on the dance floor. 🎧🛠🎶
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> DJ
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new Tech Stuff
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Your Journey from Digital Dreams to Dance Floor Realities."{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: "rgb(155 333 222)"}}>Bazio</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
