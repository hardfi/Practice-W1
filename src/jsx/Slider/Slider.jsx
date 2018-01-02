import React from 'react';
import { Container, Row, Col, Nav, NavItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class MainSlider extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: [
        {content: 'content 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {content: 'content 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {content: 'content 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {content: 'content 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {content: 'content 5 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {content: 'content 6 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {content: 'content 7 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {content: 'content 8 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {content: 'content 9 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {content: 'content 923f32f'},
        {content: 'content 9dwedwed2'},
        {content: 'content 9f54h65h76h'},
      ],
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
    const list = this.state.list;
    let slideRight = Number(this.state.slideNumberRight) + 1;
    let slideLeft = Number(this.state.slideNumberLeft) + 1;

    if (slideRight === list.length) {
      slideRight = 0;
    }

    if (slideLeft === list.length) {
      slideLeft = 0;
    }

    const getListItem = () => {
      const firstDiv = document.querySelector('.slide1').innerHTML = this.state.list[slideRight].content;
    }
    getListItem();

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
    let slideLeft = Number(this.state.slideNumberLeft) - 1;
    let slideRight = Number(this.state.slideNumberRight) - 1;

    if (slideLeft === -1) {
      slideLeft = list.length - 1;
    }

    if (slideRight === -1) {
      slideRight = list.length - 1;
    }

    const getListItem = () => {
      const firstDiv = document.querySelector('.slide5').innerHTML = this.state.list[slideLeft].content;
    }
    getListItem();

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

  slidesAsButtons = () => {
    document.querySelector('.slide4').addEventListener('click', () => {
      this.handlePrev();
      console.log('listener prev yes');
      console.log(this.state.slideNumberRight, this.state.slideNumberLeft);
    });

    document.querySelector('.slide2').addEventListener('click', () => {
      this.handleNext();
      console.log('listener next yes');
    });
  }

  componentDidMount() {
    this.slidesAsButtons();
  }

  render(){
    if (this.state.list != '') {
      return (
        <Row style={{paddingTop: '5vh'}}>
          <Col xs={1}></Col>
          <Col xs={10}>
            <div className='sliderMainContainer'>
              <div className='sliderMain'>
                <div className={`sliderItem slide${this.state.one}`}>{this.state.list[0].content}</div>
                <div className={`sliderItem slide${this.state.two}`}>{this.state.list[1].content}</div>
                <div className={`sliderItem slide${this.state.three}`}>

                  <div className='tile'>
                    <div className='header'>
                      <div className='pic' style={{
                          background: "url('./dist/img/people.jpg') center center /cover no-repeat"
                        }}></div>
                      <div className='content'>
                        <h4>Na sztywno</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div> X X X X </div>
                        <h5>Ocena coś tam</h5>
                      </div>
                    </div>
                    <div className='tile-title'>
                      <h2>Programista</h2>
                    </div>
                    <div className='tile-body'>
                      <div className='tile-row'>
                        <div>
                          <h5>test</h5>
                          <p>teścik</p>
                        </div>
                        <div>
                          <h5>test</h5>
                          <p>teścik</p>
                        </div>
                        <div>
                          <h5>test</h5>
                          <p>teścik</p>
                        </div>
                      </div>
                      <div className='tile-row'>
                        <div>
                          <h5>test</h5>
                          <p>teścik</p>
                        </div>
                        <div>
                          <h5>test</h5>
                          <p>teścik</p>
                        </div>
                        <div>
                          <h5>test</h5>
                          <p>teścik</p>
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

                </div>
                <div className={`sliderItem slide${this.state.four}`}>{this.state.list[3].content}</div>
                <div className={`sliderItem slide${this.state.five}`}>{this.state.list[4].content}</div>
              </div>
              <div className='arrow-left' onClick={this.handlePrev}></div>
              <div className='arrow-right' onClick={this.handleNext}></div>
            </div>
          </Col>
          <Col xs={1}></Col>
        </Row>
      )
    } else {
        return null;
    }
  }
}

export default MainSlider
