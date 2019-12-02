import React from "react";
import Container from "react-bootstrap/Container";
import "./Footer.scss";

interface Props {
  heading?: string;
}

const Footer: React.FC<Props> = ({ heading, children }) => {
  return (
    <footer className="Footer py-5 bg-dark text-light">
      <Container>
        <h3>Location</h3>
        <p>Cardiff, UK</p>
      </Container>
    </footer>
  );
};

export default Footer;
