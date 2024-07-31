

// import React from 'react';
// import './BirthdayCard.css';
// import { useEffect } from 'react';
// const BirthdayCard = ({ name, imageUrl }) => {
//     const attributesLeft = {
//       R: 'Radiant',
//       A: 'Amiable',
//       A2: 'Artistic',
//       G: 'Generous',
//       A3: 'Affectionate'
//     };
  
//     const attributesRight = {
//       S: 'Supportive',
//       R2: 'Reliable',
//       E: 'Enthusiastic',
//       E2: 'Empathetic',
//       J: 'Joyful',
//       A4: 'Appreciative'
//     };
  
//     const createPetal = () => {
//       const petal = document.createElement('div');
//       petal.classList.add('petal');
//       petal.style.left = Math.random() * 100 + 'vw';
//       petal.style.animationDuration = Math.random() * 3 + 2 + 's';
//       petal.style.backgroundImage = `url('/petals/petal${Math.floor(Math.random() * 3) + 1}.png')`;
//       document.body.appendChild(petal);
  
//       setTimeout(() => {
//         petal.remove();
//       }, 5000);
//     };
  
//     useEffect(() => {
//       const interval = setInterval(createPetal, 300);
//       return () => clearInterval(interval);
//     }, []);
  
//     return (
//       <div className="card-container">
//         <div className="attributes left">
//           {Object.entries(attributesLeft).map(([letter, attribute], index) => (
//             <div key={`left-${index}`} className="attribute">
//               <span className="letter">{letter.replace(/[0-9]/g, '')}</span>: {attribute}
//             </div>
//           ))}
//         </div>
//         <div className="card">
//           <img src={imageUrl} alt="Birthday" className="card-img" />
//           <div className="card-content">
//             <h1 className="card-title" style={{color:"black"}}>Happy Birthday, {name}!</h1>
//             <p className="card-text" style={{color:"black"}}>Wishing you all the best on your special day!</p>
//           </div>
//         </div>
//         <div className="attributes right">
//           {Object.entries(attributesRight).map(([letter, attribute], index) => (
//             <div key={`right-${index}`} className="attribute">
//               <span className="letter">{letter.replace(/[0-9]/g, '')}</span>: {attribute}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default BirthdayCard;


// import React, { useEffect, useState } from 'react';
// import './BirthdayCard.css';

// const BirthdayCard = ({ name, imageUrl }) => {
//   const [flowers, setFlowers] = useState([]);

//   useEffect(() => {
//     const createFlowers = () => {
//       let newFlowers = [];
//       for (let i = 0; i < 100; i++) { // Adjust the number of flowers as needed
//         newFlowers.push(i);
//       }
//       setFlowers(newFlowers);
//     };

//     createFlowers();
//   }, []);

//   return (
//     <div className="card-container">
//       <div className="attributes left">
//         <div className="attribute">R: Radiant</div>
//         <div className="attribute">A: Amiable</div>
//         <div className="attribute">A: Artistic</div>
//         <div className="attribute">G: Generous</div>
//         <div className="attribute">A: Affectionate</div>
//       </div>

//       <div className='flower'> <img src={imageUrl} alt="Birthday" className="card-img" /></div>
//       <div className="card">
       
//         <div className="card-content">
//         <img src={imageUrl} alt="Birthday" className="card-img" />
//           <h1 className="card-title" style={{ color: "black" }}>Happy Birthday, {name}!</h1>
//           <p className="card-text" style={{ color: "black" }}>Wishing you all the best on your special day!</p>
//         </div>
//       </div>
//       <div className="attributes right">
//         <div className="attribute">S: Supportive</div>
//         <div className="attribute">R: Reliable</div>
//         <div className="attribute">E: Enthusiastic</div>
//         <div className="attribute">E: Empathetic</div>
//         <div className="attribute">J: Joyful</div>
//         <div className="attribute">A: Appreciative</div>
//       </div>
//       {flowers.map((flower, index) => (
//         <div key={index} className="flower"></div>
//       ))}
//     </div>
//   );
// };

// export default BirthdayCard;


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
import image from "../components/images/petals.jpeg"
import image1 from "../components/images/petals.jpeg"


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
        <div className='flower'>
           <img style={{width:"30px", height:"40px"}} src={image} alt='petals'/>  
        </div>
        <div style={{marginLeft:"40%"}} className='flower'>
           <img style={{width:"30px", height:"40px"}} src={image} alt='petals'/>   
        </div>
        <div style={{marginLeft:"50%"}} className='flower'>
           <img style={{width:"30px", height:"40px"}} src={image} alt='petals'/>   
        </div>
          <div className="card-content">
          <img src={imageUrl} alt="Birthday" className="card-img" />
            <h1 className="card-title" style={{color:"black"}}>Happy Birthday, {name}!</h1>
            <p className="card-text" style={{color:"black"}}>Wishing you all the best on your special day!</p>
          </div>
          <div style={{marginLeft:"20%"}} className='flower'>
           <img style={{width:"30px", height:"40px"}} src={image1} alt='petals'/>
           
        </div>
        <div  className='flower'>
           <img style={{width:"30px", height:"40px"}} src={image1} alt='petals'/>
           
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
