import { Container, Image, Row, Col } from 'react-bootstrap';

const Policies = () => {
  return (
    <div id="policies">
      <Container fluid>
        <Row>
          <Col xs={1} md={2} lg={3}></Col>
          <Col xs={10} md={8} lg={6} className="title">
            <h1>Policies</h1>
            <ul id="main-rules">
              <li>Check-in: After 3:00PM</li>
              <li>Checkout: 11:00AM</li>
              <li>No smoking.</li>
              <li>No pets.</li>
            </ul>
          </Col>
          <Col xs={1} md={2} lg={3}></Col>
        </Row>
        <Row>
          <Col xs={1} md={2} lg={3}></Col>
          <Col xs={10} md={8} lg={6} className="rules">
            <h3>Additional rules:</h3>
            <ul>
              <li>
                NO PARTIES! If you are planning to rent the cabin as a place to
                come and party, please find another listing.
              </li>
              <li>
                DRINKING PARTIES ARE NOT PERMITTED! The River Cabin is designed
                for vacationing, relaxing and spending quality time together
                with friends and family. We do not allow parties of any type or
                excessive drinking.
              </li>
              <li>
                The cabin sleeps 6 people. We do not allow more than 6 guests at
                the cabin.
              </li>
              <li>
                No shoes in the house, please take shoes off in the mudroom or
                screened porch.
              </li>
              <li>Do not rearrange the furniture.</li>
              <li>
                Please shut off lights when you are not home and when you leave.
              </li>
              <li>
                Please be conservative with the water it is a very small well
                and you don’t want to run out.{' '}
              </li>
              <li>
                Guests are responsible for any damage caused to the cabin or
                cabin contents, while they are there as guests. Guests are
                responsible for the cost of damage.
              </li>
              <li>
                Larger Itinerary will be sent before arrival with specific
                helpful information and house rules.
              </li>
            </ul>
          </Col>
          <Col xs={1} md={2} lg={3}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Policies;
