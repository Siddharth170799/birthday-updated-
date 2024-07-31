


import React, { useEffect } from 'react';
import './BirthdayCard.css';

import image from "../components/images/petals.jpeg"

const BirthdayCard = ({ name, imageUrl }) => {
  const attributesLeft = {
    R: 'Radiant',
    A: 'Amiable',
    A2: 'Artistic',
    G: 'Generous',
    A3: 'Affectionate'
  };

  const attributesRight = {
    S: 'Supportive',
    R2: 'Reliable',
    E: 'Enthusiastic',
    E2: 'Empathetic',
    J: 'Joyful',
    A4: 'Appreciative'
  };

  const createPetal = () => {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 3 + 2 + 's';
    petal.style.backgroundImage = `url('/petals/petals${Math.floor(Math.random() * 3) + 1}.png')`;
    document.body.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 5000);
  };

  useEffect(() => {
    const interval = setInterval(createPetal, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card-container">
      <div className="attributes left">
        {Object.entries(attributesLeft).map(([letter, attribute], index) => (
          <div key={`left-${index}`} className="attribute">
            <span className="letter">{letter.replace(/[0-9]/g, '')}</span>: {attribute}
          </div>
        ))}
      </div>
   
      
      <div className="card">
      <div className='petal' style={{marginLeft:"40%"}}>
           <img style={{width:"30px", height:"40px",padding:"10%",}} src={image} alt='petals'/>  
           

       </div>
       <div className='petal' style={{marginLeft:"10%"}}>
           <img style={{width:"30px", height:"40px",padding:"10%",}} src={image} alt='petals'/>  
           

       </div>
       <div className='petal' style={{marginLeft:"10%"}}>
           <img style={{width:"30px", height:"40px",padding:"10%",}} src={image} alt='petals'/>  
           

       </div>
       <div className='petal' style={{marginLeft:"10%"}}>
           <img style={{width:"30px", height:"40px",padding:"10%",}} src={image} alt='petals'/>  
           

       </div>
       <div className='petal' style={{marginLeft:"10%"}}>
           <img style={{width:"30px", height:"40px",padding:"10%",}} src={image} alt='petals'/>  
           

       </div>
       <div className='petal' style={{marginLeft:"10%"}}>
           <img style={{width:"30px", height:"40px",padding:"10%",}} src={image} alt='petals'/>  
           

       </div>
       <div className='petal' style={{marginLeft:"10%"}}>
           <img style={{width:"30px", height:"40px",padding:"10%",}} src={image} alt='petals'/>  
           

       </div>
       <div className='petal' style={{marginLeft:"10%"}}>
           <img style={{width:"30px", height:"40px",padding:"10%",}} src={image} alt='petals'/>  
           

       </div>
       <div className='petal' style={{marginLeft:"80%"}}>
           <img style={{width:"30px", height:"40px",padding:"10%",}} src={image} alt='petals'/>  
           

       </div>
       <div className='petal' style={{marginLeft:"70%"}}>
           <img style={{width:"30px", height:"40px",padding:"10%",}} src={image} alt='petals'/>  
           

       </div>
       <div className='petal' style={{marginRight:"90%"}}>
           <img style={{width:"30px", height:"40px",padding:"10%",}} src={image} alt='petals'/>  
           

       </div>
       <div className='petal' style={{marginRight:"140%"}}>
           <img style={{width:"30px", height:"40px",padding:"10%",}} src={image} alt='petals'/>  
           

       </div>
       {/* <div className='petal' style={{marginRight:"70%"}}>
           <img style={{width:"30px", height:"40px",padding:"10%",}} src={image} alt='petals'/>  
           

       </div> */}
        <div className="card-content">
          <img src={imageUrl} alt="Birthday" className="card-img" />
          <h3 className="card-title">Happy Birthday, {name}!</h3>
          <p className="card-text">
            Wishing you all the best on your special day! May God bless you with health, wealth, and happiness.
            You should attain new heights of success in your life. I wish you also celebrate your 100th birthday
            with the same enthusiasm and excitement.
          </p>
        </div>
      </div>
      <div className="attributes right">
        {Object.entries(attributesRight).map(([letter, attribute], index) => (
          <div key={`right-${index}`} className="attribute">
            <span className="letter">{letter.replace(/[0-9]/g, '')}</span>: {attribute}
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default BirthdayCard;
