import Image from 'next/image';

const Cabin = () => {
  return (
    <div id="cabin">
      <Image src="/photos/welcome.jpg" width={300} height={400} />
      <h1>The Cabin</h1>
      Offering Vacation rental in my cozy cabin on the Schroon river in Schroon
      Lake New York. 3 bedroom cabin with private river frontage. Kitchen, one
      bath, livingroom, dining area.. Relax on the screened porch, or take a
      dip, sit by the firepit or do some grilling. Kayaking, fishing, tubing and
      swimming. high speed Internet to stream movies on a rainy day. Full cell
      reception for Verizon tower users.
    </div>
  );
};

export default Cabin;
