import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

class SearchField extends React.Component{
  render(){
    return (
        <Row className="align-items-center" style={{height: "15vh", minHeight: "100px"}}>
          <Col xs={2}></Col>
          <Col xs={8}>
            <div className='search'>
              <div className="magnif"><img src="./dist/img/search.svg" /></div>
              <input type='text' placeholder="Wpisz szukaną frazę np. informatyka, Warszawa, java" />
              <Button>Szukaj</Button>
            </div>
          </Col>
          <Col xs={2}></Col>
        </Row>
    )
  }
}

export default SearchField
