import { Container, Image, Row, Col } from 'react-bootstrap';

const Attractions = () => {
  return (
    <div id="attractions">
      <Container fluid>
        <Row>
          <Col xs={1} md={2} lg={3}></Col>
          <Col xs={10} md={8} lg={6} className="title">
            <h1>Attractions</h1>
          </Col>
          <Col xs={1} md={2} lg={3}></Col>
        </Row>
        <Row>
          <Col xs={1} md={2} lg={3}></Col>
          <Col xs={10} md={8} lg={6} className="attractions-content">
            <p>
              <span className="attraction">Schroon Lake: </span>The Cabin is
              also close to town (approximately 4.5 miles). Schroon Lake has a
              beautiful town beach, tennis courts and basketball courts as well
              as a golf course. There are some great restaurants in town as
              well.
            </p>
            <p>
              <span className="attraction">Skiing: </span>Gore Mountain Ski Area
              is approximately 40 minutes away and Lake Placid (Whiteface
              Mountain) is approximately 50 minutes away.
            </p>
            <p>
              <span className="attraction">History: </span>The historical towns
              of Lake George (40 minutes) and Ticonderoga (20 minutes) are close
              and great to visit.{' '}
            </p>
            <p>
              <span className="attraction">Hiking: </span>Keene Valley, home of
              the Adirondack High Peaks, is approximately 20 minutes from the
              cabin. If you are a hiker, the location of the River Cabin makes
              access to the high peak trails very convenient.
            </p>
          </Col>
          <Col xs={1} md={2} lg={3}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Attractions;
