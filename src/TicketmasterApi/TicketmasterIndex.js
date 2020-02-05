import React, { useState, useEffect } from "react";
import { Form, Input, Label, Button, Container, Row, Col } from "reactstrap";
import TicketmasterResults from "./TicketmasterResults";
import TmResultsDisplay from "./TmResultsDisplay";

const CORSByPass = "https://cors-anywhere.herokuapp.com/";
const baseURL = "app.ticketmaster.com/discovery/v2/events";
const key = "xwbbEtziqoJfipLtrIzZYHPLIAKlR3EQ";
const secret = "GVW1oVqUo73AmA9P";

const TicketmasterIndex = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [result, setResult] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const fetchResults = () => {
    const url = `${CORSByPass}${baseURL}?keyword=music&startDateTime=${startDate}T17:05:00Z&endDateTime=${endDate}T17:05:00Z&page=${pageNumber}&city=${city}&countryCode=US&stateCode=${state}&apikey=${key}`;

    console.log(url);
    console.log("fetch", pageNumber);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setResult(data._embedded.events);
        console.log(result);
      })
      // .then(helper())
      .catch(err => console.log(err, "Giving an error"));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setPageNumber(0);
    fetchResults();
  };
  // const helper = () => {
  //   result.map(item => {
  //     return <h2>{item.name}</h2>;
  //   });
  // };

  useEffect(() => fetchResults(), [pageNumber]);

  const changePageNumber = (e, direction) => {
    e.preventDefault();
    if (direction === "down") {
      console.log("previous clicked", pageNumber);
      setPageNumber(pageNumber - 1);
    } else if (direction === "up") {
      console.log("next clicked", pageNumber);
      setPageNumber(pageNumber + 1);
    }
  };

  const buttonFunction = () => {
    if (pageNumber === 0 && result.length < 20) {
      return "all of the shows during that time";
    } else if (pageNumber > 0 && result.length < 20) {
      return (
        <button
          onClick={e => {
            changePageNumber(e, "down");
          }}
        >
          Previous 20
        </button>
      );
    } else if (pageNumber > 0 && result.length > 19) {
      return (
        <div>
          <button
            onClick={e => {
              changePageNumber(e, "down");
            }}
          >
            Previous 20
          </button>
          <button
            onClick={e => {
              changePageNumber(e, "up");
            }}
          >
            Next 20
          </button>
        </div>
      );
    } else if (pageNumber === 0 && result.length >= 20) {
      return (
        <button
          onClick={e => {
            changePageNumber(e, "up");
          }}
        >
          Next 20
        </button>
      );
    } else {
      return (
        <div>
          <button
            onClick={e => {
              changePageNumber(e, "down");
            }}
          >
            Previous 20
          </button>
          <button
            onClick={e => {
              changePageNumber(e, "up");
            }}
          >
            Next 20
          </button>
        </div>
      );
    }
  };

  return (
    <Container>
      <Row>
        <Col md="4">
          <Form onSubmit={e => handleSubmit(e)}>
            <h2>Search for concerts!</h2>
            <Label htmlFor="searchcity">Enter the city</Label>
            <Input
              type="text"
              value={city}
              id="cityInput"
              onChange={e => setCity(e.target.value)}
            />
            <br />
            <Label htmlFor="searchstate">
              Enter the State (format AK, IN, CT, etc).
            </Label>
            <Input
              type="text"
              value={state}
              id="stateInput"
              onChange={e => setState(e.target.value)}
            />
            <br />
            <Label htmlFor="startdate">
              Enter the start date (format YYYY-MM-DD)
            </Label>
            <Input
              type="text"
              value={startDate}
              id="startDate"
              onChange={e => setStartDate(e.target.value)}
            />
            <br />
            <Label htmlFor="enddate">
              Enter the end date (format YYYY-MM-DD)
            </Label>
            <Input
              type="text"
              value={endDate}
              id="endDate"
              onChange={e => setEndDate(e.target.value)}
            />
            <br />

            <Button type="submit">Submit Search</Button>
          </Form>
          <br />
          {/* <div>
            <button
              onSubmit={() => {
                setPageNumber(pageNumber - 1);
                fetchResults();
              }}
            >
              Previous 20
            </button>
            <button
              onSubmit={() => {
                setPageNumber(pageNumber + 1);
                hanldeSubmit();
              }}
            >
              Next 20
            </button>
          </div> */}
        </Col>
        <Col md="8">
          <br />
          {buttonFunction()}
          <br />
          {result.length > 0
            ? result.map(item => {
                return (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <TicketmasterResults item={item} />
                  </div>
                );
              })
            : "There are no concerts"}
        </Col>
      </Row>
    </Container>
  );
};
// Check for results, map over the results, call ticketmasterresults to
// display individual h1 tags for each

export default TicketmasterIndex;

// KovZpZAEAtEA,KovZpZAEAtJA,KovZpZAEktEA,KovZpZAEkt1A,KovZpvEk7A,KovZpZAEAAJA,KovZpZAIdvdA,Z7r9jZadti,KovZpaoDze,Z7r9jZadSQ

// https://app.ticketmaster.com/discovery/v2/venues?apikey=xwbbEtziqoJfipLtrIzZYHPLIAKlR3EQ&id=KovZpZAEAtEA,KovZpZAEAtJA,KovZpZAEktEA,KovZpZAEkt1A,KovZpvEk7A,KovZpZAEAAJA,KovZpZAIdvdA,Z7r9jZadti,KovZpaoDze,Z7r9jZadSQ&source=ticketmaster&locale=*&sort=name,desc&stateCode=IN

// https://app.ticketmaster.com/discovery/v2/events?apikey=xwbbEtziqoJfipLtrIzZYHPLIAKlR3EQ&keyword=music&venueId=KovZpZAEAtEA,KovZpZAEAtJA,KovZpZAEktEA,KovZpZAEkt1A,KovZpvEk7A,KovZpZAEAAJA,KovZpZAIdvdA,Z7r9jZadti,KovZpaoDze,Z7r9jZadSQ&locale=*&startDateTime=2020-01-31T17:05:00Z&endDateTime=2020-02-29T17:05:00Z

// ,,KovZpZAEktEA,KovZpZAEkt1A,KovZpvEk7A,KovZpZAEAAJA,KovZpZAIdvdA,Z7r9jZadti,KovZpaoDze,Z7r9jZadSQ

// KovZpZAEAtEA, KovZpZAEAtJA

// https://app.ticketmaster.com/discovery/v2/events?apikey=xwbbEtziqoJfipLtrIzZYHPLIAKlR3EQ&keyword=music&locale=*&startDateTime=2020-02-03T17:05:00Z&endDateTime=2020-02-29T17:05:00Z&city=Indianapolis&countryCode=US&stateCode=IN

//https://app.ticketmaster.com/discovery/v2/events?apikey=xwbbEtziqoJfipLtrIzZYHPLIAKlR3EQ&keyword=music&locale=*&startDateTime=2020-02-03T17:05:00Z&endDateTime=2020-02-29T17:05:00Z&city=Indianapolis&countryCode=US&stateCode=IN
