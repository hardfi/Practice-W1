import React from 'react';
import { Container, Row, Col} from 'reactstrap';

class Footer extends React.Component{
  render(){
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col xs={6}>
              <div className='copyright'>Copyright Harex 2017</div>
            </Col>
            <Col xs={6} className="d-flex justify-content-end bot-menu">
              <div>Regulamin</div>
              <div>Polityka prywatności</div>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}

export default Footer
