import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';

function NextArrow(props) {
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

function PrevArrow(props) {
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


export default class MainSlider extends React.Component{
  render(){
    var settings = {
      centerMode: true,
      easing: 'easeOut',
      focusOnSelect: true,
      centerPadding: '10px',
      slidesToShow: 3,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <Slider {...settings}>
        <div><img src='./dist/img/okno.png'/></div>
        <div><img src='./dist/img/okno.png'/></div>
        <div><img src='./dist/img/okno.png'/></div>
        <div><img src='./dist/img/okno.png'/></div>
        <div><img src='./dist/img/okno.png'/></div>
        <div><img src='./dist/img/okno.png'/></div>
      </Slider>
    )
  }
}

class App extends React.Component{
  render(){
    return (
      <div>
        <MainSlider />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
