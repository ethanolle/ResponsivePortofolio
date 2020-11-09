import React, { Component } from "react";
import "../cv_img/style.css";
import cv1 from "../../assets/img/cv1.png";
import cv from "../../assets/img/cv.png";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Roll from "react-reveal/Roll";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import { EmailShareButton } from "react-share";
import { AiOutlineDownload } from "react-icons/ai";

import { EmailIcon } from "react-share";

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
      <div>
        <Roll right>
          <Zoom right>
            <Flip right>
              <div>
                <img
                  src={cv}
                  onClick={() => this.setState({ isOpen: true })}
                  className='cv_img_mouse'
                  alt='Ethan Sayagh CV preview'
                />
                {isOpen && (
                  <Lightbox
                    toolbarButtons={[
                      // <EmailShareButton
                      //   url={window.location.href}
                      //   children={<EmailIcon size={32} round={true} />}
                      // />,
                      <AiOutlineDownload
                        href='/images/myw3schoolsimage.jpg'
                        download='w3logo'
                        className='test'
                        size={25}
                        // round={true}
                        // onclick="window.open('file.doc')"
                      ></AiOutlineDownload>,
                    ]}
                    mainSrc={images[photoIndex]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                  />
                )}
              </div>
            </Flip>
          </Zoom>
        </Roll>
      </div>
    );
  }
}
