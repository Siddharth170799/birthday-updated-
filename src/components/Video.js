// import React from 'react';


// const VideoComponent = () => {
//   return (
//     <div>
    
//       <video width="600" controls>
//         <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default VideoComponent;


import React from 'react';
import './VideoComponent.css'; // Import the CSS file for styling

const VideoComponent = () => {
  return (
    <div className="video-container" style={{marginBottom:"50%"}}>
      <video className="responsive-video" controls>
        <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;

