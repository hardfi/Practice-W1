import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col, Nav, NavItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const NextArrow = (props) => {
  const {className, style, onClick} = props
  return (
    <div
      className="slick-arrow-next"
      style={{...style,
        display: 'block',
        background: "url('./dist/img/right.svg') center center /cover no-repeat",
        width: '69px',
        height: '69px'
       }}
      onClick={onClick}
    ></div>
  );
}

const PrevArrow = (props) => {
  const {className, style, onClick} = props
  return (
    <div
      className="slick-arrow-prev"
      style={{...style, display: 'block',
        background: "url('./dist/img/left.svg') center center /cover no-repeat",
        width: '69px',
        height: '69px'}}
      onClick={onClick}
    ></div>
  );
}

class MainSlider extends React.Component{
  render(){
    var settings = {
      centerMode: true,
      easing: 'easeOut',
      focusOnSelect: true,
      centerPadding: '0',
      slidesToShow: 3,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
       {
         breakpoint: 992,
         settings: {
           centerMode: true,
           easing: 'easeOut',
           focusOnSelect: true,
           centerPadding: '0',
           slidesToShow: 1,
           nextArrow: <NextArrow />,
           prevArrow: <PrevArrow />,
         }
       }
     ]
   };
    return (
      <Row className="align-items-start" style={{height: "70vh", minHeight: "480px"}}>
        <Col xs={1}></Col>
        <Col xs={10}>
          <Slider {...settings}>
            <div><img src='./dist/img/okno.png'/></div>
            <div><img src='./dist/img/okno.png'/></div>
            <div><img src='./dist/img/okno.png'/></div>
            <div><img src='./dist/img/okno.png'/></div>
            <div><img src='./dist/img/okno.png'/></div>
            <div><img src='./dist/img/okno.png'/></div>
          </Slider>
        </Col>
        <Col xs={1}></Col>
      </Row>
    )
  }
}

export default MainSlider
