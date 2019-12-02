import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import "./App.scss";
import Footer from "./Footer";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Section from "./Section";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Section heading="Projects">
        <Portfolio />
        <div>Watch this space! I'm planning to add to this list. Until then, you can visit my <a href="http://github.com/matkastner">Github profile</a> for more.</div>
      </Section>
      <Section heading="About">
        <Row>
          <Col md={6}>
            <p>
              I've been really lucky to have a very varied career and have had
              lots of opportunities to try new tools and technologies, from big
              data to really pretty websites.
            </p>
            <p>
              Working at IBM with 381k employees and DabApps with just 30 means
              I've experienced companies with very different cultures and the
              benefits and challenges of both.
            </p>
          </Col>
          <Col md={6}>
            <p>
              While I have a lot of back-end experience now, I've always loved
              making things look good and improving the user experience. I think
              that the way an app looks and feels is really important.
            </p>
            <p>
              I'm always looking to try new things and work with the latest
              tech. I'm currently looking to work with smart home tech some more
              and improve my React Native skills.
            </p>
          </Col>
        </Row>
      </Section>
      <Section heading="Employers">
        <div className="employers">
          <a href="https://www.dabapps.com/">
            <Image src="/employers/dabapps.svg" />
          </a>
          <a href="https://en.wikipedia.org/wiki/Sorenson_Media">
            <Image src="/employers/sorenson-media.svg" />
          </a>
          <a href="https://www.bt.com/">
            <Image src="/employers/bt.svg" />
          </a>
          <a href="https://www.ibm.com/">
            <Image src="/employers/ibm.svg" />
          </a>
        </div>
      </Section>
      <Section heading="Languages and Libraries">
        <h4 className="text-center">I'm currently working with:</h4>
        <div className="tech">
          <Image src="/tech/django.svg" fluid />
          <Image src="/tech/firebase.svg" fluid />
          <Image src="/tech/html5.svg" fluid />
          <Image src="/tech/less.svg" fluid />
          <Image src="/tech/python.svg" fluid />
          <Image src="/tech/react.svg" fluid />
          <Image src="/tech/redux.png" fluid />
          <Image src="/tech/sass.svg" fluid />
          <Image src="/tech/typescript.svg" fluid />
        </div>
        <h4 className="text-center mt-5">I have past experience with:</h4>
        <div className="tech">
          <Image src="/tech/android.svg" fluid />
          <Image src="/tech/csharp.png" fluid />
          <Image src="/tech/java.svg" fluid />
          <Image src="/tech/spring.svg" fluid />
          <Image src="/tech/ruby.svg" fluid />
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default App;
