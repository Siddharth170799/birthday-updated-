import React from 'react';

const VideoComponent = () => {
  return (
    <div>
      <h1>My Local Video</h1>
      <video width="600" controls>
        <source src={`${process.env.PUBLIC_URL}/my-video.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
