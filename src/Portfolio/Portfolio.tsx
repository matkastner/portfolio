import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Portfolio.scss";
import PortfolioItemCard from "./PortfolioItemCard";
import { PortfolioItem, PortfolioItemType } from "./Types";

const Portfolio: React.FC = () => {
  const projects: ReadonlyArray<PortfolioItem> = [
    {
      date: new Date(2019, 12, 1),
      name: "Timezone Countdown",
      summary: "Counts down to midnight in timezones across the world.",
      description:
        "**Timezone countdown** is a project I started to celebrate new years eve. As I'm planning to host a party in my flat, I've created an app that can be shown on the screen and display the next 'midnight' to celebrate.\n\nI have a keen interest in IoT and have some Phillips Hue lightbulbs - the plan is for the lights to cycle through the colours of the next country's flag. The app also shows facts about the current county like the capital, population and currency.\n\nOne of my goals for this project was to improve my knowledge of more modern React techniques such as function components, context and hooks in a safe environment.",
      images: [
        "portfolio/timezone-countdown/timezones-1.png",
        "portfolio/timezone-countdown/timezones-2.png",
        "portfolio/timezone-countdown/timezones-3.png"
      ],
      link: "http://see-you-next-timezone.web.app",
      repo: "http://github.com/matkastner/timezone-countdown",
      type: PortfolioItemType.OwnProject
    },
    {
      date: new Date(2019, 11, 1),
      name: "PubTracker",
      summary: "Track and compete for most time in a pub.",
      description:
        "I'm working on **PubTrack** with a friend of mine - my friends and I all regularily visit the pub together and needed a way to pick a venue and find out where everyone is without asking every week.\n\nThe concept has ballooned into this fun app where everyone has a fake currency which they can gamble and trade; users can compete for the most time spent in a particular pub and 'own' pubs, kinda like Foursquare.\n\nWe both started this project simply to learn more React, Firestore and Cloud Functions - it has been really fun to work on something that we can be a little messy and creative with. I've really enjoyed working with react-spring and animating everything!",
      images: [
        "portfolio/pub-tracker/pub-tracker-check-in.png",
        "portfolio/pub-tracker/pub-tracker-christmas.png",
        "portfolio/pub-tracker/pub-tracker-championships.png",
        "portfolio/pub-tracker/pub-tracker-coin-balances.png",
        "portfolio/pub-tracker/pub-tracker-items.png",
        "portfolio/pub-tracker/pub-tracker-profile.png"
      ],
      link: "http://tracker.pub",
      repo: "https://gitlab.com/mjwhelton/championship-web",
      type: PortfolioItemType.Collaboration
    },
    {
      date: new Date(2019, 10, 1),
      name: "iComply Mobile",
      summary:
        "A smart cloud-based app that lets you manage dental compliance easily from anywhere.",
      description:
        "I worked on this React Native app at DabApps for CodeUK. It was really fun to work with React Native - something I've always wanted to learn.\n\nI worked on this with some really smart guys and learnt a lot from it. I was surprised at how much easier it was developing in React Native vs native Android and how close to the web version of React it is, however I did find it to be very buggy and fiddly.\n\nI think the end result looks really good and it was really nice to work with features I hadn't worked with before such as fingerprint, Face ID and notifications.",
      images: [
        "portfolio/icomply/icomply-1.webp",
        "portfolio/icomply/icomply-2.webp",
        "portfolio/icomply/icomply-3.webp",
        "portfolio/icomply/icomply-4.webp",
        "portfolio/icomply/icomply-5.webp"
      ],
      link: "https://play.google.com/store/apps/details?id=com.codeuk.icomply",
      type: PortfolioItemType.Contracted
    },
    {
      date: new Date(2018, 8, 4),
      name: "SpoonsTracker",
      summary: "Track the number of Wetherspoon pubs you've visited.",
      description:
        "Once upon a time, Wetherspoons pubs used to have little pamplets in them which listed all of the Wetherspoon pubs in the UK along with some checkboxes. We then found out that this is part of a challenge that is very popular where you visit and keep track of all of the Wetherspoons and post them on a Facebook group.\n\nMy friend and I thought this would be a really fun opportunity for an app so we set about creating a new project. I'd hadn't really done much web development before, so we picked Polymer which was a framework that Google were pushing at the time. I loved the idea of Web Components that could run directly in the browser.\n\nThis project used Firebase realtime db which was really fun to work with (if a little slow) and gives a really good user experience because you can actually watch other people checking pubs off.\n\nThe app was incredibly popular but we've not had time to develop it recently - it still gets several views a day!",
      link: "http://spoonstracker.com",
      type: PortfolioItemType.Collaboration
    },
    {
      date: new Date(2018, 8, 4),
      name: "NovoRecruit",
      summary: "Help Novo Nordisk track medical trial recruits.",
      description:
        "This was my first major React/Redux project. It was a fairly straightforward app to work on, however I learnt a lot about React and various libraries such as React Router and Redux. I'm really proud of the outcome, it looks really nice and has been very successful, securing more funding and improvements.",
      link: "http://spoonstracker.com",
      type: PortfolioItemType.Collaboration
    },
    {
      date: new Date(2017, 8, 4),
      name: "Land Rover BAR",
      summary: "Tracked sensor data from a high tech boat in real time.",
      description:
        "I was really luck to work on a flagship project for BT with Land Rover BAR. The goal of the company was to build the fastest race boat in order to win the Americas Cup.\n\nMy part in that was to develop an app that would track data from over 300 sensors on the boat and stream it in real time back to the base. This could then be used to speed up post-race analysis and coaching. It was also used by the engineering team to help them run tests on various boat parts in order to build the best possible boat within the rules of the competition.",
      caseStudy:
        "http://home.bt.com/tech-gadgets/future-tech/how-bts-technology-is-helping-ben-ainslies-bid-to-bring-the-americas-cup-home-11364107980539",
      type: PortfolioItemType.Contracted
    }
  ];

  return (
    <Row className="Portfolio d-flex flex-wrap">
      {projects
        .slice()
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .map(project => (
          <Col key={project.name} className="item-col" md={6} lg={4}>
            <PortfolioItemCard project={project} />
          </Col>
        ))}
    </Row>
  );
};

export default Portfolio;
