import Link from 'next/link';

const Cabin = () => {
  return (
    <div id="cabin">
      <div id="cabin-title">
        <h1>The Cabin</h1>
      </div>
      <div id="cabin-content">
        <div id="cabin-images">
          <img src="/photos/welcome.jpg" />
        </div>
        <div id="cabin-description">
          <p>
            River's Bend is a cozy cabin with private river frontage on the
            Schroon river in Schroon Lake, New York. Bring your family and stay
            in this 3 bedroom, 1 bath cabin with a living room and dining area.
          </p>

          <p>
            Relax on the screened porch, sit by the firepit or do some grilling.
            Enjoy kayaking, fishing, tubing, and swimming right from the
            property.
          </p>

          {/* <div id="photo-area">
            <img src="/photos/campfire.jpg" />
          </div> */}

          <p>
            Rainy day? Stream movies using our high speed internet. We also have
            full cell reception for Verizon tower users.
          </p>
          <p>
            <Link href="/photos">Check out more photos here</Link>
          </p>
          {/* <img src="/photos/bed1.jpg" />
          <img src="/photos/river.jpg" /> */}
        </div>
      </div>
    </div>
  );
};

export default Cabin;
