import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kasa from "../../Assets/Projects/kasa.jpg";
import hotTakes from "../../Assets/Projects/hot-takes.jpg";
import kanap from "../../Assets/Projects/kanap.jpg";
import panthere from "../../Assets/Projects/panthere.jpg";
import ohmyfood from "../../Assets/Projects/ohmyfood.jpg";
import booki from "../../Assets/Projects/booki.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">réalisations </strong>récentes
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kasa}
              title="Kasa"
              description="Développement d'une application web de location immobilière avec React."
              ghLink="https://github.com/nagharbi/kasa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotTakes}
              title="Hot Takes"
              description="Développement d’une API sécurisée avec Node.js pour l’application d’avis gastronomiques des sauces piquantes."
              ghLink="https://github.com/nagharbi/p6-api-piiquante"
              ghFrontLink="https://github.com/nagharbi/piiquante-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kanap}
              title="Kanap"
              description="Construction et développement d'une site e-commerce en JavaScript."
              ghLink="https://github.com/nagharbi/p5-web-kanap"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={panthere}
              title="La panthere agence"
              description="Optimisation d’un site web La Panthère."
              ghLink="https://github.com/nagharbi/la-panthere-agence"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ohmyfood}
              title="Ohmyfood"
              description="Développement d'un site 100% mobile qui répertoire les menus de restaurants gastronomiques."
              ghLink="https://github.com/nagharbi/ohmyfood"
              demoLink="https://nagharbi.github.io/ohmyfood/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booki}
              title="Booki"
              description="Développement et Intégration d'un site responsive en HTML et CSS."
              ghLink="https://github.com/nagharbi/booki-project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
