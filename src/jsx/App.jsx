import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';

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
      centerPadding: '10px',
      slidesToShow: 3,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <div className="row align-items-start" style={{height: "70vh", minHeight: "480px"}}>
        <div className="col-1"></div>
        <div className="col-10">
          <Slider {...settings}>
            <div><img src='./dist/img/okno.png'/></div>
            <div><img src='./dist/img/okno.png'/></div>
            <div><img src='./dist/img/okno.png'/></div>
            <div><img src='./dist/img/okno.png'/></div>
            <div><img src='./dist/img/okno.png'/></div>
            <div><img src='./dist/img/okno.png'/></div>
          </Slider>
        </div>
        <div className="col-1"></div>
      </div>
    )
  }
}

class Footer extends React.Component{
  render(){
    return (
      <footer className="footer">
        <div className='container'>
          <div className='row'>
            <div className="col-6">
              <div className='copyright'>Copyright Harex 2017</div>
            </div>
            <div className="col-6 d-flex justify-content-end bot-menu">
              <div>Regulamin</div>
              <div>Polityka prywatności</div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

class LoginModal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      class: 'none'
    }
  }

handleClick = () => {
  this.setState({
    class: "block"
  })
}

  render(){
    return (
      <div>
      <button onClick={this.handleClick}>Klik</button>
      <div className={`modal fade`} style={{display: this.state.class}}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

class Navigation extends React.Component{
  render(){
    return (
      <div className="navigation d-flex align-items-center">
        <div className="container">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="#">Załóż konto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Zaloguj</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

class SearchField extends React.Component{
  render(){
    return (
        <div className="row align-items-center" style={{height: "15vh", minHeight: "100px"}}>
          <div className="col-2"></div>
          <div className="col-8">
            <div className='search'>
              <div className="magnif"><img src="./dist/img/search.svg" /></div>
              <input type='text' placeholder="Wpisz szukaną frazę np. informatyka, Warszawa, java" />
              <div className='button'>Szukaj</div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
    )
  }
}

class App extends React.Component{
  render(){
    return (
      <div>
        <Navigation />
        <div className="container">
          <SearchField />
          <MainSlider />
        </div>
        <Footer/>
        <LoginModal/>
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
