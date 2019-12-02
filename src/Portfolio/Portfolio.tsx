import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Portfolio.scss";
import PortfolioItemCard from "./PortfolioItemCard";
import { PortfolioItem, PortfolioItemType } from "./Types";

const Portfolio: React.FC = () => {
  const projects: ReadonlyArray<PortfolioItem> = [
    {
      date: new Date(),
      name: "Timezone Countdown",
      summary: "Counts down to midnight in timezones across the world.",
      description:
        "**Timezone countdown** is a project I started to celebrate new years eve. As I'm planning to host a party in my flat, I've created an app that can be shown on the screen and display the next 'midnight' to celebrate.\n\nI have a keen interest in IoT and have some Phillips Hue lightbulbs - the plan is for the lights to cycle through the colours of the next country's flag. The app also shows facts about the current county like the capital, population and currency.",
      images: [
        "portfolio/timezone-countdown/timezones-1.png",
        "portfolio/timezone-countdown/timezones-2.png",
        "portfolio/timezone-countdown/timezones-3.png"
      ],
      link: "http://see-you-next-timezone.web.app",
      repo: "http://github.com/matkastner/timezone-countdown",
      type: PortfolioItemType.OwnProject
    }
  ];

  return (
    <Row className="Portfolio d-flex flex-wrap">
      {projects.map(project => (
        <Col key={project.name} md={6} lg={4}>
          <PortfolioItemCard project={project} />
        </Col>
      ))}
    </Row>
  );
};

export default Portfolio;
