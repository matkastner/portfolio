import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./Header.scss";

interface Props {
  heading?: string;
}

const Header: React.FC<Props> = ({ heading, children }) => {
  return (
    <header className="Header py-5 bg-primary text-light">
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <Image
          src="/profile.jpg"
          className="profile-image"
          roundedCircle
          thumbnail
          alt="Profile picture"
        />
        <h1 className="display-3 my-3">Mat Kastner</h1>
        <h4 className="lead my-3">Web Developer / Full Stack Engineer</h4>
        <ul className="profile-links">
          <li className="mx-3">
            <a href="https://github.com/matkastner">
              <FontAwesomeIcon icon={faGithub} /> Github
            </a>
          </li>
          <li className="mx-3">
            <a href="https://www.linkedin.com/in/matkastner/">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
