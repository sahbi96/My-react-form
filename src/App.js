import {
  Button,
  Card,
  ModalFooter /*Card,*/ /*Col,*/ /*Container*/ /*Jumbotron*/ /*Row*/,
} from "react-bootstrap";
import React, { Component /*useLayoutEffect*/ } from "react";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
//  import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBCardFooter } from "mdbreact";
import { MDBFooter } from "mdbreact";
import "./App.css";
import { MDBCardFooter, MDBModalFooter } from "mdbreact";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class App extends Component {
  state = {
    firstName: null,
    lastName: null,
    age: null,
    Email: null,
  };

  change = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  Submit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="blue">
          <Navbar.Brand href="#home">Welcome</Navbar.Brand>
          <Nav className="mr-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <div className="Container d-flex justify-content-center mt-5 ">
          <form onSubmit={this.submit}>
            <label
              className="font-italic h5 text-muted row justify-content-center"
              htmlFor="First name"
            >
              First name
            </label>
            <input
              className="form-control "
              type="text"
              id="First name"
              onChange={this.change}
            />
            <label
              className="font-italic h5 text-muted row justify-content-center"
              htmlFor="Last name"
            >
              Last name
            </label>
            <input
              className="form-control"
              type="text"
              id="Last name"
              onChange={this.change}
            />
            <label
              className="font-italic h5 text-muted row justify-content-center"
              htmlFor="Age"
            >
              Age
            </label>
            <input
              className="form-control"
              type="text"
              id="Age"
              onChange={this.change}
            />
            <label
              className=" font-italic h5 text-muted row justify-content-center"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="form-control"
              type="text"
              id="Email"
              onChange={this.change}
            />
            <Button className="btn btn-lg btn-primary mt-2 ">
              Send and thanks !
            </Button>
          </form>
        </div>
        <MDBCardFooter className="footer">
          <footer>Contact us for more info about this festival !</footer>
        </MDBCardFooter>
      </div>
    );
  }
}

export default App;
