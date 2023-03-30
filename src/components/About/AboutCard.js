import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut tout le monde, je suis{" "}
            <span className="purple">Nouha Gharbi. </span>
            J'habite dans la région des Yvelines à <span className="purple"> Andrèsy.</span>
            <br />Je suis développeuse web junior.
            <br />
            <br />
            A part coder, quelques autres activités que j'adore faire!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyages
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
