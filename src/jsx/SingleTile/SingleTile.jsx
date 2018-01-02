import React from 'react';
import { Container, Row, Col, Nav, NavItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class SingleTile extends React.Component {
  render(){
    // {
    //   switch (this.props.person.rating) {
    //     case '0':
    //       return (
    //         <div> zero </div>
    //       )
    //       break;
    //     case '1':
    //       return (
    //         <div> jeden </div>
    //       )
    //       break;
    //     case '2':
    //       return (
    //         <div> dwa </div>
    //       )
    //       break;
    //   }
    // }

    return (
      <div className='tile'>
        <div className='header'>
          <div className='pic' style={{
              background: `url(${this.props.person.picture}) center center /cover no-repeat`
            }}></div>
          <div className='content'>
            <h4>Profil zweryfikowany przez: <span>{this.props.person.verified}</span></h4>
            <p>{this.props.person.description}</p>
            <div>
              empty
            </div>
            <h6>Średnia ocena: {this.props.person.rating}</h6>
          </div>
        </div>
        <div className='tile-title'>
          <h2>{this.props.person.title}</h2>
        </div>
        <div className='tile-body'>
          <div className='tile-row'>
            <div>
              <h5>Branża:</h5>
              <p>{this.props.person.industry}</p>
            </div>
            <div>
              <h5>Destynacja:</h5>
              <p>{this.props.person.destination}</p>
            </div>
            <div>
              <h5>Wynagrodzenie:</h5>
              <p>{this.props.person.salary}</p>
            </div>
          </div>
          <div className='tile-row'>
            <div>
              <h5>Dostępność:</h5>
              <p>{this.props.person.availability}</p>
            </div>
            <div>
              <h5>Języki</h5>
              <p>{this.props.person.languages}</p>
            </div>
            <div>
              <h5>Cena za zweryfikowany profil:</h5>
              <p><span>{this.props.person.price}</span></p>
            </div>
          </div>
        </div>
        <div className='tile-footer'>
          <div className='tile-btns'>
            <Button>Zobacz pełny opis</Button>
            <div className='btns-row2'>
              <Button>Dodaj do katalogu</Button>
              <Button>Dodaj do kosza</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleTile
