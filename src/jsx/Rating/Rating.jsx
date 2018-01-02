import React from 'react';

class Rating extends React.Component {
  render(){
    switch (this.props.stars) {
      case '1':
      return (
        <div>
          <img src='./dist/img/star.svg' />
          <img src='./dist/img/star-grey.svg' />
          <img src='./dist/img/star-grey.svg' />
          <img src='./dist/img/star-grey.svg' />
          <img src='./dist/img/star-grey.svg' />
        </div>
      )
      break;
      case '2':
      return (
        <div>
          <img src='./dist/img/star.svg' />
          <img src='./dist/img/star.svg' />
          <img src='./dist/img/star-grey.svg' />
          <img src='./dist/img/star-grey.svg' />
          <img src='./dist/img/star-grey.svg' />
        </div>
      )
      break;
      case '3':
      return (
        <div>
          <img src='./dist/img/star.svg' />
          <img src='./dist/img/star.svg' />
          <img src='./dist/img/star.svg' />
          <img src='./dist/img/star-grey.svg' />
          <img src='./dist/img/star-grey.svg' />
        </div>
      )
      break;
      case '4':
      return (
        <div>
          <img src='./dist//img/star.svg' />
          <img src='./dist/img/star.svg' />
          <img src='./dist/img/star.svg' />
          <img src='./dist/img/star.svg' />
          <img src='./dist/img/star-grey.svg' />
        </div>
      )

      break;
      case '5':
      return (
        <div>
          <img src='./dist/img/star.svg' />
          <img src='./dist/img/star.svg' />
          <img src='./dist/img/star.svg' />
          <img src='./dist/img/star.svg' />
          <img src='./dist/img/star.svg' />
        </div>
      )
      break;
      default:
      return (
        <div>
          <img src='./dist/img/star-grey.svg' />
          <img src='./dist/img/star-grey.svg' />
          <img src='./dist/img/star-grey.svg' />
          <img src='./dist/img/star-grey.svg' />
          <img src='./dist/img/star-grey.svg' />
        </div>
      )
      break;
    }
  }
}

export default Rating
