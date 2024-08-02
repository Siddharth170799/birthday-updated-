import React from 'react';
import BackgroundMusic from './Audio';
import BackgroundMusic1 from './BackGroundMusic';
import VideoComponent from './Video';

// const About = () => {
//   return (
//     <>
//     <div className="about" style={{textAlign:"center"}}>
//    <BackgroundMusic1/>
//       <h2>About Raaga Sreeja</h2>
//       <p style={{backgroundColor:"yellow",color:"black"}}>Meet Raaga Sreeja, a truly wonderful individual known for her friendly nature and beautiful personality. She has an innate ability to connect with people and make them feel valued and understood.</p>
//       <p style={{}}>Raaga Sreeja is always ready to lend a helping hand to those in need, embodying kindness and compassion in everything she does. Her understanding of others' emotions and needs makes her a great friend and confidant.</p>
//       <p style={{backgroundColor:"green"}}>With her friendly demeanor and beautiful spirit, Raaga Sreeja brings joy and positivity wherever she goes. She is truly a remarkable person, and we are fortunate to have her in our lives.</p>
//     </div>
//     <div><VideoComponent/></div>
//     </>
//   );
// };

// export default About;
// import React from 'react';
// import BackgroundMusic from './Audio';
// import BackgroundMusic1 from './BackGroundMusic';
// import VideoComponent from './Video';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <>
      <div className="about">
        <BackgroundMusic1/>
        <h2>About Raaga Sreeja</h2>
        <p className="yellow-bg">Meet Raaga Sreeja, a truly wonderful individual known for her friendly nature and beautiful personality. She has an innate ability to connect with people and make them feel valued and understood.</p>
        <p className="default-bg">Raaga Sreeja is always ready to lend a helping hand to those in need, embodying kindness and compassion in everything she does. Her understanding of others' emotions and needs makes her a great friend and confidant.</p>
        <p className="green-bg">With her friendly demeanor and beautiful spirit, Raaga Sreeja brings joy and positivity wherever she goes. She is truly a remarkable person, and we are fortunate to have her in our lives.</p>
      </div>
      <div className="video-container">
        <VideoComponent/>
      </div>
    </>
  );
};

export default About;
