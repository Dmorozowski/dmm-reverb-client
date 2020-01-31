import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalHeader
} from "reactstrap";
import APIURL from "../helpers/environment";

const Signup = props => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`${APIURL}/auth/signup`, {
      method: "POST",
      body: JSON.stringify({
        fullname: fullName,
        email: email,
        password: password
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .then(json => props.updateToken(json.sessionToken))
      .catch(err => console.log(err));
  };

  const emailInput = () => {
    if (email === "") {
      return "Must input an email to create account/login";
    }
  };

  const passwordInput = () => {
    if (password === "") {
      return "Password required. Minimum 5 characters, with 1 special character.";
    }
  };

  return (
    <Modal isOpen={true}>
      <ModalHeader>Create an Account!</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="fullname">Full Name:</Label>
            <br />
            <Input
              type="text"
              name="fullname"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <br />
            <Input
              type="email"
              placeholder="Email required"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Label
              style={{
                color: "red",
                textShadow: "0.3px 0.3px black",
                fontWeight: "bold"
              }}
            >
              {emailInput()}
            </Label>
            <br />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password: </Label>
            <br />
            <Input
              type="password"
              placeholder="Must use 5 characters or more, at least 1 special character"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Label
              style={{
                color: "red",
                textShadow: "0.3px 0.3px black",
                fontWeight: "bold"
              }}
            >
              {passwordInput()}
            </Label>
            <br />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default Signup;
