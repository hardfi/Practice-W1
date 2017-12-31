import React from 'react';
import { Container, Row, Col, Nav, NavItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import LoginModal from '../Login/Login.jsx'

class Navigation extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: '',
      password: ''
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleInput = (event) => {
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  }

  render(){
    return (
      <Nav className="d-flex align-items-center">
        <Container>
          <NavItem href="#">Załóż konto</NavItem>
          <NavItem href="#" onClick={this.toggle}>Zaloguj</NavItem>
          <LoginModal
            toggle={this.toggle}
            modal={this.state.modal}
            email={this.state.email}
            input={this.handleInput}
            pass={this.state.pass}
            />
        </Container>
      </Nav>
    )
  }
}

export default Navigation
