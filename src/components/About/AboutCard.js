import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Burhanuddin Piplodwala</span>{" "}
            from <span className="purple">Nashik, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Digital Marketer</span> at{" "}
            <span className="purple">Codevelop USA</span>.
            <br />I hold an Engineering in{" "}
            <span className="purple">Electronics and Telecommunication</span> from{" "}
            <span className="purple">Pune University</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build something which makes a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Burhanuddin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
