import React from "react";
import Container from "react-bootstrap/Container";
import "./Section.scss";

interface Props {
  heading?: string;
}

const Section: React.FC<Props> = ({ heading, children }) => {
  return (
    <section className="Section py-5 border-dark">
      <Container>
        {heading && <h2 className="mb-5">{heading}</h2>}
        {children}
      </Container>
    </section>
  );
};

export default Section;
