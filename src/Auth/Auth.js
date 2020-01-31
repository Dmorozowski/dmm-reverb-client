import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardTitle,
  CardText,
  CardHeader,
  CardSubtitle,
  CardBody,
  CardImg
} from "reactstrap";
import Signup from "./Signup";
import Login from "./Login";
import "./Auth.css";

// const items = [
//   {
//     src: {require("../assets/moonTaxi.jpg")},
//     altText: "Moon Taxi Show",
//     caption: "Moon Taxi performing at the Bluebird"
//   },
//   {
//     src: "../assets/carolineRose.jpg",
//     altText: "Caroline Rose Concert",
//     caption: "Caroline Rose kicking off the Bonnaroo 2019 festivities"
//   },
//   {
//     src: "../assets/lordHuron.jpg",
//     altText: "Lord Huron at the Vogue",
//     caption: "Lord Huron performing at the Vogue in Indy"
//   },
//   {
//     src: "../assets/gambino.jpg",
//     altText: "Childish Gambino at Bonnaroo",
//     caption: "Childish Gambino headlining Bonnaroo 2019"
//   },
//   {
//     src: "../assets/fjm2.jpg",
//     altText: "Father John Misty at Granfalloon fest Bloomington",
//     caption:
//       "Father John Misty closing out the first day of Granfalloon in Bloomington"
//   }
// ];
const Auth = props => {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // const next = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === item.length - 1 ? 0 : activeIndex + 1;
  //   setActiveIndex(nextIndex);
  // };

  // const previous = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === 0 ? item.length - 1 : activeIndex - 1;
  //   setActiveIndex(nextIndex);
  // };

  // const goToIndex = newIndex => {
  //   if (animating) return;
  //   setActiveIndex(newIndex);
  // };

  const getLogin = () => {
    return login === true ? <Login updateToken={props.updateToken} /> : <></>;
  };

  const getSignup = () => {
    return signup === true ? <Signup updateToken={props.updateToken} /> : <></>;
  };
  return (
    <div className="mainAuthDiv">
      {/* <img
        src={require("../assets/homepage.jpeg")}
        style={{ backgroundSize: "cover" }}
      ></img> */}
      <Container className="auth-container">
        <Row>
          <Col md="4" className="signup-col">
            {getSignup()}
            <Button
              type="button"
              onClick={() => setSignup(true)}
              id="signupButton"
              style={{
                height: "4em",
                width: "10em",
                backgroundColor: "transparent",
                color: "white",
                fontWeight: "bold",
                fontWeight: "bold",
                fontSize: "2em",
                padding: "0px 0px",
                borderColor: "transparent",
                textShadow: "0.1em 0.1em #A37CBE",
                position: "relative",
                top: "2em"
              }}
            >
              Signup
            </Button>
            {getLogin()}
            <Button
              type="button"
              onClick={() => setLogin(true)}
              id="loginButton"
              style={{
                height: "4em",
                width: "10em",
                backgroundColor: "transparent",
                color: "white",
                fontWeight: "bold",
                fontSize: "2em",
                padding: "0px 0px",
                borderColor: "transparent",
                textShadow: "0.1em 0.1em #A37CBE",
                position: "relative",
                top: "3.5em"
              }}
            >
              Login
            </Button>
          </Col>
          <Col md="2" className="space-col"></Col>
          <Col md="6" className="login-col">
            {/* <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              <CarouselItem
                className="item"
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={require("../assets/moonTaxi.jpg")}
              >
                <img
                  src={require("../assets/moonTaxi.jpg")}
                  alt={"Moon Taxi Show"}
                />
                <CarouselCaption
                  captionText={
                    "Incredible energy, no matter how large the venue or crowd. One of my favorite bands to see live!"
                  }
                  captionHeader={"Moon Taxi performing at the Bluebird"}
                />
              </CarouselItem>
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel> */}
            <Card
              style={{
                height: "35em",
                width: "30em",
                borderRadius: "20px",
                border: "0.2em solid  #a37cbe",
                backgroundColor: "#E8E9E9"
              }}
            >
              <CardBody>
                <CardTitle style={{ fontWeight: "bold", fontSize: "1.5em" }}>
                  Review Concerts, Share Experiences
                </CardTitle>

                <CardImg
                  src={require("../assets/moonTaxi.jpg")}
                  style={{ height: "22em", width: "19em" }}
                />
                <br />
                <br />
                <CardSubtitle>
                  <b>Moon Taxi performing at the Bluebird in Bloomington</b>
                </CardSubtitle>

                <CardText>
                  Moon Taxi are one of my favorite bands to see live. It doesn't
                  matter how big the crowd is, they always pull out all the
                  stops in their performances. They make it impossible to not
                  have fun.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Auth;
