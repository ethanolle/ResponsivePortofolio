import React from 'react';
import '../social_icons/style.css';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
    <Col xl={12} className='social-icons'>
      &nbsp; &nbsp; &nbsp; &nbsp;
      {/* <a href="https://fb.com/okrittim" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="fb" icon={faFacebook} />
          </a> */}
      <a
        href='https://github.com/ethanolle'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon className='git' icon={faGithub} />
      </a>
      <a
        href='https://stackoverflow.com/users/14200659/ethanolle'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon className='StackOverflow' icon={faStackOverflow} />
      </a>
      <a
        href='https://www.instagram.com/ethanolle/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon className='insta' icon={faInstagram} />
      </a>
      <a
        href='https://www.linkedin.com/in/ethan-sayagh'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon className='linkedin' icon={faLinkedin} />
      </a>
    </Col>
  );
}

export default SocialIcons;
