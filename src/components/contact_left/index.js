import React from "react";
import "../contact_left/style.css";
import { Row, Col } from "react-bootstrap";
import SocialIcons from "../social_icons";

function Contact_Left() {
  return (
    <div>
      <Row className="Contact-text">
        <Col xl={12}>
          <h1 className="p-heading1">Get In Touch</h1>
          <p className="p-heading2">
            Shalom <strong>Visitor !!</strong>
            <br />
            Thank you for bumping in. If you have any queries/ideas/projects,
            feel free to <strong>PING</strong> me.
          </p>
        </Col>
      </Row>

      <Row className="contact-left-footer">
        <SocialIcons />
      </Row>
    </div>
  );
}

export default Contact_Left;
