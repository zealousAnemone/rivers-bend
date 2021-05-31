const Photos = () => {
  const pics = [];
  for (let i = 1; i < 7; i++) {
    let image = `/photos/${i}.jpg`;
    pics.push(<img src={image} className="photo" />);
  }

  return <div id="photos">{pics}</div>;
};

export default Photos;
