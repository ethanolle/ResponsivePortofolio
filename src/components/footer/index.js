import React from "react";
import "../footer/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container className='footer' fluid={true}>
      <Row>
        <Col xl={12}>
          Copyright © 2018-{new Date().getFullYear()}
          <strong>Ethan Sayagh</strong>,
          <small>
            V2.3 - Mail: <strong>ethan.sayagh@gmail.com</strong> - Phone:
            <strong> +(972) 584888635 </strong>
          </small>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
