

import React from 'react';
import './BirthdayCard.css';

// const BirthdayCard = ({ name, imageUrl }) => {
//   const attributesLeft = {
//     R: 'Radiant',
//     A: 'Amiable',
//     A2: 'Artistic',
//     G: 'Generous',
//     A3: 'Affectionate'
//   };

//   const attributesRight = {
//     S: 'Supportive',
//     R2: 'Reliable',
//     E: 'Enthusiastic',
//     E2: 'Empathetic',
//     J: 'Joyful',
//     A4: 'Appreciative'
//   };

//   return (
//     <div className="card-container">
//       <div className="attributes left">
//         {Object.entries(attributesLeft).map(([letter, attribute], index) => (
//           <div key={`left-${index}`} className="attribute">
//             <span className="letter">{letter.replace(/[0-9]/g, '')}</span>: {attribute}
//           </div>
//         ))}
//       </div>
//       <div className="card">
//         <img src={imageUrl} alt="Birthday" className="card-img" />
//         <div className="card-content">
//           <h1 className="card-title" style={{color:"black"}}>Happy Birthday, {name}!</h1>
//           <p className="card-text" style={{color:"black"}}>Wishing you all the best on your special day!</p>
//         </div>
//       </div>
//       <div className="attributes right">
//         {Object.entries(attributesRight).map(([letter, attribute], index) => (
//           <div key={`right-${index}`} className="attribute">
//             <span className="letter">{letter.replace(/[0-9]/g, '')}</span>: {attribute}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BirthdayCard;

import { useEffect } from 'react';



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
      petal.style.backgroundImage = `url('/petals/petal${Math.floor(Math.random() * 3) + 1}.png')`;
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
          <img src={imageUrl} alt="Birthday" className="card-img" />
          <div className="card-content">
            <h1 className="card-title" style={{color:"black"}}>Happy Birthday, {name}!</h1>
            <p className="card-text" style={{color:"black"}}>Wishing you all the best on your special day!</p>
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