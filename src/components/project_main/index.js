import React, { Component, useState } from "react";
import "../project_main/style.css";
import { Col, Card, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faLink } from "@fortawesome/free-solid-svg-icons";
import info from "../../const/project_info.json";
import Lightbox from "react-image-lightbox";
import { Link, animateScroll as scroll } from "react-scroll";

export default class PM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      image: "",
    };
  }

  render() {
    const { photoIndex, isOpen, image, activeIndex, animating } = this.state;

    return (
      <Row xl={12} className="main_row">
        {info.data.map((item) => (
          <Col xl={4} key={item.id} className="card_col">
            <Card className="card_main">
              <blockquote className="blockquote mb-0 card-body">
                <h2>{item.name}</h2>
                <footer className="blockquote-footer">
                  built using <strong title="Source Title">{item.tools}</strong>
                </footer>
                <br />
                <p className="description" title="description">
                  <strong>The Challenge:</strong>
                  <br />
                  <span>{item.challenge}</span>
                </p>
                <p className="description" title="description">
                  <strong>The Solution:</strong>
                  <br />
                  <span>{item.solution}</span>
                </p>
              </blockquote>
              <Card.Body>
                <FontAwesomeIcon
                  onClick={() =>
                    this.setState({ isOpen: true, image: item.image })
                  }
                  className="icon"
                  size="lg"
                  icon={faImages}
                />{" "}
                &nbsp;&nbsp;
                {item.link !== false && (
                  <Card.Link href={item.link} target="_blank">
                    <FontAwesomeIcon className="icon" size="lg" icon={faLink} />
                  </Card.Link>
                )}
              </Card.Body>
            </Card>
            {isOpen && (
              <Lightbox
                mainSrc={image[photoIndex]}
                nextSrc={image[(photoIndex + 1) % image.length]}
                prevSrc={image[(photoIndex + image.length - 1) % image.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + image.length - 1) % image.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % image.length,
                  })
                }
              />
            )}
          </Col>
        ))}
      </Row>
    );
  }
}
