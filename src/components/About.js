import React from 'react';
import BackgroundMusic from './Audio';
import BackgroundMusic1 from './BackGroundMusic';

const About = () => {
  return (
    <div className="about" style={{textAlign:"center",marginBottom:"20%"}}>
   <BackgroundMusic1/>
      <h2>About Raaga Sreeja</h2>
      <p style={{backgroundColor:"yellow",color:"black"}}>Meet Raaga Sreeja, a truly wonderful individual known for her friendly nature and beautiful personality. She has an innate ability to connect with people and make them feel valued and understood.</p>
      <p style={{}}>Raaga Sreeja is always ready to lend a helping hand to those in need, embodying kindness and compassion in everything she does. Her understanding of others' emotions and needs makes her a great friend and confidant.</p>
      <p style={{backgroundColor:"green"}}>With her friendly demeanor and beautiful spirit, Raaga Sreeja brings joy and positivity wherever she goes. She is truly a remarkable person, and we are fortunate to have her in our lives.</p>
    </div>
  );
};

export default About;
