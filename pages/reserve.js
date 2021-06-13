import { Container, Image, Row, Col } from 'react-bootstrap';

const Reserve = () => {
  return (
    <div id="reserve">
      <Container fluid>
        <Row>
          <Col xs={1} md={2} lg={3}></Col>
          <Col xs={10} md={8} lg={6} className="title">
            <h1>Reservations</h1>
          </Col>
          <Col xs={1} md={2} lg={3}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reserve;
