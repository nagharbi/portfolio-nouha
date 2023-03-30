import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function SubHome() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSE MOI ME <span className="purple"> PRÉSENTER</span>
            </h1>
            <p className="home-about-body">
              Je me présente Nouha Gharbi 🤷‍♂️ développeuse web junior passionné
              par les technologies informatiques.
              <br />
              <br />
              J'ai une grande envie de contribuer à la{" "}
              <i>
                <b className="purple">conception des sites web</b>
              </i>
              , une forte motivation à apprendre et à s'adapter rapidement à l'
              <i>
                <b className="purple">évolution technologique</b>
              </i>
              .
              <br />
              <br />
              L’engagement envers l'amélioration des résultats, la créativité et
              la collaboration.
              <br />
              <br />
              Mon domaine d'intérêt est la création de{" "}
              <i>
                <b className="purple">produits Web</b>
              </i>
              , ainsi que les domaines liés à l'apprentissage en profondeur et
              au{" "}
              <i>
                <b className="purple">veille téchnologique</b>
              </i>
              . &nbsp;
              <br />
              <br />
              Autant que possible, j'applique aussi ma passion pour développer
              des produits avec <b className="purple">Node.js</b> et
              <i>
                <b className="purple"> React.</b>
              </i>
              &nbsp;
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ-MOI SUR</h1>
            <p>
              N'hésitez pas à me <span className="purple"> contacter</span> sur
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nagharbi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ngharbi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default SubHome;
