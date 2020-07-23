import React from "react";
import Bcg from "../img/bcg-traffic.jpg";
import { Container, Row, Col } from "react-bootstrap";

const Home = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <img src={Bcg} className="bcg-image" alt="Bcg" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
