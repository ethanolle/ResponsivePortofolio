import React, { Component } from "react";
import "../cv_img/style.css";
import cv1 from "../../assets/img/cv1.png";

import cv from "../../assets/img/cv.png";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Roll from "react-reveal/Roll";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";

const images = [cv1];

export default class CRI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <Roll right>
        <Zoom right>
          <Flip right>
            <div>
              <img
                src={cv}
                onClick={() => this.setState({ isOpen: true })}
                className="cv_img_mouse"
                alt="Ethan Sayagh CV preview"
              />
              {isOpen && (
                <Lightbox
                  mainSrc={images[photoIndex]}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                />
              )}
            </div>
          </Flip>
        </Zoom>
      </Roll>
    );
  }
}
