import Link from 'next/link';
import { Container, Image, Row, Col } from 'react-bootstrap';

const Cabin = () => {
  return (
    <div id="cabin">
      <Container fluid>
        <Row>
          <Col xs={1} md={2} lg={3}></Col>
          <Col xs={10} md={8} lg={6} className="title">
            <h1>The Cabin</h1>
          </Col>
          <Col xs={1} md={2} lg={3}></Col>
        </Row>
        <Row xs={1} md={2}>
          <Col md={4}>
            <Image src="/photos/welcome.jpg" fluid />
          </Col>
          <Col md={8}>
            <p>
              River's Bend is a cozy cabin with private river frontage on the
              Schroon river in Schroon Lake, New York. Bring your family and
              stay in this 3 bedroom, 1 bath cabin with a living room and dining
              area.
            </p>

            <p>
              Relax on the screened porch, sit by the firepit or do some
              grilling. Enjoy kayaking, fishing, tubing, and swimming right from
              the property.
            </p>

            <p>
              Rainy day? Stream movies using our high speed internet. We also
              have full cell reception for Verizon tower users.
            </p>
            <p>
              <Link href="/photos">Check out more photos here</Link>
            </p>
          </Col>
        </Row>
      </Container>
      {/* <img src="/photos/bed1.jpg" />
          <img src="/photos/river.jpg" /> */}
    </div>
  );
};

export default Cabin;
