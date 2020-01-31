import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import APIURL from "../helpers/environment";

const ConcertCreate = props => {
  const [city, setCity] = useState("");
  const [venue, setVenue] = useState("");
  const [artist, setArtist] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:3000${APIURL}/concerts/review/`, {
      method: "POST",
      body: JSON.stringify({
        city: city,
        venue: venue,
        artist: artist,
        date: date,
        rating: rating,
        review: review
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCity("");
        setVenue("");
        setArtist("");
        setDate("");
        setRating(0);
        setReview("");
        // props.fetchConcerts();
      })
      .then(data => {
        props.fetchConcerts();
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="mainDiv">
      <h2>Write a concert review!</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="city">City:</Label>
          <Input
            type="text"
            id="city"
            value={city}
            placeholder="What city was the concert in?"
            onChange={e => setCity(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="venue">Venue:</Label>
          <Input
            type="text"
            id="venue"
            value={venue}
            placeholder="Venue that hosted the show"
            onChange={e => setVenue(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="artist">Artist:</Label>
          <Input
            type="text"
            id="artist"
            value={artist}
            placeholder="Artist/Band that performed"
            onChange={e => setArtist(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="date">Date:</Label>
          <Input
            type="date"
            id="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="rating">Rating:</Label>
          <Input
            type="number"
            id="rating"
            value={rating}
            placeholder="Rating: Out of 5 stars"
            onChange={e => setRating(e.target.value)}
          >
            {/* <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option> */}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="review">Review:</Label>
          <Input
            type="text"
            id="review"
            value={review}
            placeholder="The good, the bad, the ugly"
            onChange={e => setReview(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Leave Review</Button>
      </Form>
    </div>
  );
};

export default ConcertCreate;
