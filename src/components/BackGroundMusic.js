


// import React, { useEffect, useRef } from 'react';

// const BackgroundMusic1 = () => {
//   const audioRef = useRef(null);

//   useEffect(() => {
//     const playAudio = () => {
//       if (audioRef.current) {
//         audioRef.current.currentTime = 0; 
//         audioRef.current.play().catch(error => {
//           console.error("Error attempting to play audio: ", error);
//         });
//       }
//     };

//     playAudio();

//     return () => {
//       if (audioRef.current) {
//         audioRef.current.pause();
//       }
//     };
//   }, []);

//   return (
//     <audio ref={audioRef} className="audioBtn">
//       <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
//     </audio>
//   );
// };

// export default BackgroundMusic1;
import React, { useEffect, useRef } from 'react';

const BackgroundMusic1 = () => {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; 
      audioRef.current.play().catch(error => {
        console.error("Error attempting to play audio: ", error);
      });
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset to start
    }
  };

  useEffect(() => {
    playAudio();

    return () => {
      stopAudio(); 
    };
  }, []);

  return (
    <div className="background-music">
      <audio ref={audioRef} className="audioBtn">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
      </audio>
      <button onClick={playAudio} style={{backgroundColor:"green",height:"40px"}}>Play Music</button>
      <button onClick={stopAudio} style={{backgroundColor:"red",height:"40px"}}>Stop Music</button>
    </div>
  );
};

export default BackgroundMusic1;


