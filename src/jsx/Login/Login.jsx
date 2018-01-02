import React from 'react';
import { Container, Row, Col, Nav, NavItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


class LoginModal extends React.Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} fade={false}>
          <ModalHeader>Logowanie</ModalHeader>
          <ModalBody>
            <Form action="https://foodsi-stage.applover.pl/api/v1/auth" method="POST">
              <FormGroup>
                <Label>Email</Label>
                <Input type='email'
                  name='email'
                  onChange={this.props.input}
                  value={this.props.email}
                  />
              </FormGroup>
              <FormGroup validationState="success">
                <Label>Hasło</Label>
                <Input type='password'
                  name='password'
                  onChange={this.props.input}
                  value={this.props.pass}/>
              </FormGroup>
              <Button >Zaloguj</Button>
              </Form>
            <h6>&#8213;<span> lub </span>&#8213;</h6>
            <Button>Zaloguj się przez Faceboook</Button>
            <Button>Zaloguj się przez LinkedIn</Button>
            <Button>Zresetuj hasło</Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default LoginModal
