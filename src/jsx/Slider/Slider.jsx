import React from 'react';
import { Container, Row, Col, Nav, NavItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import SingleTile from '../SingleTile/SingleTile.jsx';

// variables changing slide generation based on object array;
let tile5 = 4,
    tile1 = 0,
    tile2 = 1,
    tile3 = 2,
    tile4 = 3;

class MainSlider extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: this.props.people,
      slideNumberLeft: '1',
      slideNumberRight: '3',
      one: '1',
      two: '2',
      three: '3',
      four: '4',
      five: '5'
    }
  }

  handleNext = () => {
    const list = this.state.list

    // updating visible slides: left - right (eg. 1 -5, 2 - 6 etc.)
    let slideLeft = Number(this.state.slideNumberLeft) - 1;
    let slideRight = Number(this.state.slideNumberRight) - 1;

    if (slideLeft === -1) {
      slideLeft = list.length - 1;
    }

    if (slideRight === -1) {
      slideRight = list.length - 1;
    }

    // generating new lefthand slide (which is yet hidden)
    switch (document.querySelector('.slide1').className) {
      case 'sliderItem tile2 slide1':
        tile2 = slideLeft;
        break;
      case 'sliderItem tile3 slide1':
        tile3 = slideLeft;
        break;
      case 'sliderItem tile4 slide1':
        tile4 = slideLeft;
        break;
      case 'sliderItem tile5 slide1':
        tile5 = slideLeft;
        break;
      case 'sliderItem tile1 slide1':
        tile1 = slideLeft;
        break;
      }

      // carousel move right
      const count = (counter) => {
        let number = Number(counter);
        if (number + 1 === 6) {
          return 1;
        } else {
          return number + 1;
        }
      }

    this.setState({
      slideNumberRight: slideRight,
      slideNumberLeft: slideLeft,
      one: count(this.state.one),
      two: count(this.state.two),
      three: count(this.state.three),
      four: count(this.state.four),
      five: count(this.state.five)
    })
  }

  handlePrev = () => {
    const list = this.state.list;
    let slideRight = Number(this.state.slideNumberRight) + 1;
    let slideLeft = Number(this.state.slideNumberLeft) + 1;

    if (slideRight === list.length) {
      slideRight = 0;
    }

    if (slideLeft === list.length) {
      slideLeft = 0;
    }

    switch (document.querySelector('.slide5').className) {
      case 'sliderItem tile2 slide5':
        tile2 = slideRight;
        break;
      case 'sliderItem tile3 slide5':
        tile3 = slideRight;
        break;
      case 'sliderItem tile4 slide5':
        tile4 = slideRight;
        break;
      case 'sliderItem tile5 slide5':
        tile5 = slideRight;
        break;
      case 'sliderItem tile1 slide5':
        tile1 = slideRight;
        break;
    }

    const count = (counter) => {
      let number = Number(counter);
      if (number - 1 === 0) {
        return 5;
      } else {
        return number - 1;
      }
    }

    this.setState({
      slideNumberLeft: slideLeft,
      slideNumberRight: slideRight,
      one: count(this.state.one),
      two: count(this.state.two),
      three: count(this.state.three),
      four: count(this.state.four),
      five: count(this.state.five)
    })

  }

  render(){
    if (this.state.list) {
      return (
        <Row style={{paddingTop: '12%'}}>
          <Col md={1}></Col>
          <Col xs={12} md={10}>
            <div className='sliderMainContainer'>
              <div className='sliderMain'>
                <div className={`sliderItem tile1 slide${this.state.one}`}>
                  <SingleTile person={this.state.list[tile1]}/>
                </div>
                <div className={`sliderItem tile2 slide${this.state.two}`}>
                  <SingleTile person={this.state.list[tile2]}/>
                </div>
                <div className={`sliderItem tile3 slide${this.state.three}`}>
                  <SingleTile person={this.state.list[tile3]}/>
                </div>
                <div className={`sliderItem tile4 slide${this.state.four}`}>
                  <SingleTile person={this.state.list[tile4]}/>
                </div>
                <div className={`sliderItem tile5 slide${this.state.five}`}>
                  <SingleTile person={this.state.list[tile5]}/>
                </div>
              </div>
              <div className='arrow-left' onClick={this.handlePrev}></div>
              <div className='arrow-right' onClick={this.handleNext}></div>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      )
    } else {
        return null;
    }
  }
}

export default MainSlider
