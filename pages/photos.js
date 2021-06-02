import { photoData } from '../photo-data';

const Photos = () => {
  const pics = [];
  for (let i = 0; i < photoData.length; i++) {
    let photoObj = photoData[i];
    let image = `/photos/${photoObj.filename}`;
    pics.push(<img src={image} />);
  }

  return <div id="photos">{pics}</div>;
};

export default Photos;
