import React from "react";
import {
  CardTitle,
  CardBody,
  CardText,
  CardSubtitle,
  Button
} from "reactstrap";

const ConcertDisplay = props => {
  console.log(props);
  return (
    <CardBody>
      <CardText>
        <b>User: </b> {props.concertReview.owner}
      </CardText>
      <CardTitle>
        <b>Artist/Band:</b> {props.concertReview.artist}
      </CardTitle>
      <CardText>
        <b>City:</b> {props.concertReview.city}
      </CardText>
      <CardText>
        <b>Venue:</b> {props.concertReview.venue}
      </CardText>
      <CardText>
        <b>Day of Show:</b> {props.concertReview.date}
      </CardText>
      <CardText>
        <b>Rating:</b> {props.concertReview.rating}
      </CardText>
      <CardSubtitle>
        <b>Review:</b> {props.concertReview.review}
      </CardSubtitle>
    </CardBody>
  );
};

export default ConcertDisplay;
