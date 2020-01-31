import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button } from "reactstrap";
import ConcertCreate from "./ConcertCreate";
import ConcertDisplay from "./ConcertReview/ConcertDisplay";
import ConcertUpdate from "./ConcertUpdate";
import "./ConcertIndex.css";
import APIURL from "../helpers/environment";
//Setting up concert review page
const ConcertIndex = props => {
  const [concerts, setConcerts] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [concertToUpdate, setConcertToUpdate] = useState({});

  //Concert card displays individual reviews
  const concertCard = () => {
    //Delete functionality
    const deleteConcert = concertInfo => {
      fetch(`${APIURL}/concerts/${concertInfo.id}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: props.token
        })
      }).then(() => fetchConcerts());
    };
    //Maps over concert reviews to display based on ConcertDisplay setup
    return concerts.map((concertInfo, index) => {
      return (
        <Card
          key={index}
          className="reviewCard"
          style={{
            boxShadow: "8px 8px 8px black",
            display: "flex",
            margin: "5em"
          }}
        >
          <ConcertDisplay
            concertReview={concertInfo}
            fetchConcerts={fetchConcerts}
            editUpdateConcert={editUpdateConcert}
            updateOn={updateOn}
            token={props.token}
          />
          <Button
            onClick={() => {
              editUpdateConcert(concertInfo);
              updateOn();
            }}
            style={{
              backgroundColor: "#A37CBE",
              width: "12em",
              position: "relative",
              alignSelf: "center"
            }}
          >
            Update
          </Button>
          <br />
          <Button
            onClick={() => deleteConcert(concertInfo)}
            style={{
              backgroundColor: "#393085",
              width: "12em",
              position: "relative",
              alignSelf: "center"
            }}
          >
            Delete
          </Button>
          {updateActive ? (
            <ConcertUpdate
              concertToUpdate={concertToUpdate}
              updateOff={updateOff}
              token={props.token}
              fetchConcerts={fetchConcerts}
            />
          ) : (
            <div></div>
          )}
        </Card>
      );
    });
  };

  const fetchConcerts = () => {
    fetch(`${APIURL}/concerts/mine`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token
      })
    })
      .then(res => res.json())
      .then(data => setConcerts(data));
    //   .then(console.log(concerts));
  };

  //Functionality required for update review function
  const editUpdateConcert = concert => {
    setConcertToUpdate(concert);
    console.log(concert);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  useEffect(() => {
    fetchConcerts();
  }, []);

  return (
    <Container id="returnContainer">
      <Row>
        <Col md="4">
          <ConcertCreate fetchConcerts={fetchConcerts} token={props.token} />
        </Col>
        <Col md="8">
          <div>{concertCard()}</div>
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default ConcertIndex;
