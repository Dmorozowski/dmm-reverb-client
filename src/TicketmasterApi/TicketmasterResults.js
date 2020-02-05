import React, { useState } from "react";
import { Card, CardTitle, CardImg, CardBody, CardText } from "reactstrap";

const TicketmasterResults = props => {
  return (
    <div>
      <Card
        key={props.item.id}
        style={{
          height: "36em",
          width: "36em",
          boxShadow: "0.2em 0.2em 0.2em 0.2em black",
          borderRadius: "20px"
        }}
      >
        <br />
        <CardTitle style={{ fontSize: "1.5em" }}>{props.item.name}</CardTitle>
        <CardBody>
          <CardImg
            src={props.item.images[0].url}
            style={{ height: "20em", width: "26em" }}
          />

          <CardText>Day of show: {props.item.dates.start.localDate}</CardText>
          <CardText>Time of show: {props.item.dates.start.localTime}</CardText>
          <CardText>
            <a
              href={props.item.url}
              target="blank"
              style={{ border: "solid 2px black", padding: "2px" }}
            >
              Buy a ticket!
            </a>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default TicketmasterResults;
