import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
function SingleStudent() {
  const data = useLocation();
  return (
    <div>
      <h1>{data.state.name}</h1>
      <h1>{data.state.age}</h1>
      <h1>{data.state.hobby}</h1>
      <ReactPlayer
        controls
        volume={10}
        muted
        width={200}
        height={200}
        url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
      />
      <img src={data.state.image} alt='cartoon' />
    </div>
  );
}

export default SingleStudent;
