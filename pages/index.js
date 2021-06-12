import { Container, Image, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <Container fluid>
      <Image src="/photos/aerial.JPG" fluid />

      <Row>
        <Col lg={3} md={2} xs={1}></Col>
        <Col lg={6} md={8} xs={10}>
          <h1>Welcome to River's Bend</h1>

          <p>
            Relax in this cozy cabin in the Adirondacks, right on the Schroon
            River near Schroon Lake, NY.
          </p>
          <p>
            Perfect for nature lovers! Go for a hike, take a swim, kayak on the
            river, or take a trip into town. At night, relax by the fire, then
            get comfy in this private cabin.
          </p>
          <p>
            Ready to get away from it all? Find out how you can book your next
            escape.
          </p>
        </Col>
        <Col lg={3} xs={1} md={2}></Col>
      </Row>
    </Container>
  );
}
