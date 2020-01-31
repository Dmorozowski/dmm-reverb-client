import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

const ConcertUpdate = props => {
  const [editCity, setEditCity] = useState(props.concertToUpdate.city);
  const [editVenue, setEditVenue] = useState(props.concertToUpdate.venue);
  const [editArtist, setEditArtist] = useState(props.concertToUpdate.artist);
  const [editDate, setEditDate] = useState(props.concertToUpdate.date);
  const [editRating, setEditRating] = useState(props.concertToUpdate.rating);
  const [editReview, setEditReview] = useState(props.concertToUpdate.review);
  const concertEdit = e => {
    e.preventDefault();
    fetch(`http://localhost:3000/concerts/${props.concertToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        city: editCity,
        venue: editVenue,
        artist: editArtist,
        date: editDate,
        rating: editRating,
        review: editReview
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token
      })
    }).then(res => {
      props.fetchConcerts();
      props.updateOff();
    });
  };

  return (
    <Modal isOpen={true}>
      <ModalHeader>Review your concerts!</ModalHeader>
      <ModalBody>
        <Form onSubmit={concertEdit}>
          <FormGroup>
            <Label htmlFor="city">Edit City:</Label>
            <Input
              type="text"
              value={editCity}
              onChange={e => setEditCity(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="venue">Edit Venue:</Label>
            <Input
              type="text"
              value={editVenue}
              onChange={e => setEditVenue(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="artst">Edit Artist:</Label>
            <Input
              type="text"
              value={editArtist}
              onChange={e => setEditArtist(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="date">Edit Date:</Label>
            <Input
              type="date"
              value={editDate}
              onChange={e => setEditDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="rating">Edit Rating:</Label>
            <Input
              type="number"
              value={editRating}
              onChange={e => setEditRating(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="review">Edit Review:</Label>
            <Input
              type="text"
              value={editReview}
              onChange={e => setEditReview(e.target.value)}
            />
          </FormGroup>
          <Button
            type="submit"
            style={{
              backgroundColor: "#A37CBE",
              width: "10em",
              margin: "0em 4em"
            }}
          >
            Update the Review!
          </Button>
          <Button type="button" onClick={e => props.updateOff()}>
            Cancel
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ConcertUpdate;
