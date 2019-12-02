import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import ReactMarkdown from "react-markdown";
import { PortfolioItem, PortfolioItemType } from "./Types";

interface Props {
  project: PortfolioItem;
}

const PortfolioItemCard: React.FC<Props> = ({ project }) => {
  const [modalShown, setModalShown] = useState(false);

  return (
    <>
      <Card
        border={
          project.type === PortfolioItemType.OwnProject
            ? "primary"
            : project.type === PortfolioItemType.Collaboration
            ? "info"
            : project.type === PortfolioItemType.Contracted
            ? "success"
            : undefined
        }
        key={project.name}
        className="item"
        bg="light"
      >
        {project.images && project.images.length >= 1 && (
          <Card.Img
            variant="top"
            src={project.images[0]}
            onClick={() => setModalShown(true)}
          />
        )}
        <Card.Body>
          <Card.Title onClick={() => setModalShown(true)}>
            {project.name}
          </Card.Title>
          <Card.Text>
            {project.summary}
            {project.description && (
              <Card.Link href="#" onClick={() => setModalShown(true)}>
                {" "}
                See more...
              </Card.Link>
            )}
          </Card.Text>
          {project.caseStudy && (
            <Card.Link href={project.caseStudy}>See case study</Card.Link>
          )}
          {project.link && <Card.Link href={project.link}>Try it!</Card.Link>}
          {project.repo && <Card.Link href={project.repo}>Repo</Card.Link>}
        </Card.Body>
      </Card>

      <Modal size="lg" show={modalShown} onHide={() => setModalShown(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{project.name}</Modal.Title>
        </Modal.Header>
        {project.images && project.images.length >= 1 && (
          <Carousel>
            {project.images.map(image => (
              <Carousel.Item key={image}>
                <img className="d-block w-100" src={image} alt="First slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        )}
        <Modal.Body>
          <ReactMarkdown source={project.description} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PortfolioItemCard;
