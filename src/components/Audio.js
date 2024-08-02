

// import React, { useRef } from 'react';

// const BackgroundMusic = () => {
//   const audioRef = useRef(null);

//   // Function to play the audio
//   const playMusic = () => {
//     console.log("Play button clicked"); // Debug log
//     if (audioRef.current) {
//       console.log("Audio element found"); // Debug log
//       audioRef.current.volume = 1; // Set the volume to 50%
//       audioRef.current.play().catch(error => {
//         // Handle the error (e.g., if the play() call is blocked)
//         console.log("Playback failed: ", error);
//       });
//     } else {
//       console.log("Audio element not found"); // Debug log
//     }
//   };

//   // Function to stop the audio
//   const stopMusic = () => {
//     console.log("Stop button clicked"); // Debug log
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//   };

//   return (
//     <div>
//       <button onClick={playMusic} style={{ marginBottom: '10px' }}>
//         Play Music
//       </button>
//       <button onClick={stopMusic} style={{ marginBottom: '10px' }}>
//         Stop Music
//       </button>

//       <audio ref={audioRef} loop>
//         <source src="https://drive.google.com/file/d/1kz1GAzjAeDTacE8Cz6c0m7-68GbRua1p/view?usp=sharing
// " type="audio/mp3" />
      
//         Your browser does not support the audio element.
//       </audio>
//     </div>
//   );
// };

// export default BackgroundMusic;

// // import React, { useRef } from 'react';

// // const BackgroundMusic = () => {
// //   const audioRef = useRef(null);

// //   // Function to play the audio
// //   const playMusic = () => {
// //     console.log("Play button clicked"); // Debug log
// //     if (audioRef.current) {
// //       console.log("Audio element found"); // Debug log
// //       audioRef.current.volume = 1; // Set the volume to 50%
// //       audioRef.current.play().catch(error => {
// //         // Handle the error (e.g., if the play() call is blocked)
// //         console.log("Playback failed: ", error);
// //       });
// //     } else {
// //       console.log("Audio element not found"); // Debug log
// //     }
// //   };

// //   // Function to stop the audio
// //   const stopMusic = () => {
// //     console.log("Stop button clicked"); // Debug log
// //     if (audioRef.current) {
// //       audioRef.current.pause();
// //       audioRef.current.currentTime = 0;
// //     }
// //   };

// //   return (
// //     <div>
// //       <button onClick={playMusic} style={{ marginBottom: '10px' }}>
// //         Play Music
// //       </button>
// //       <button onClick={stopMusic} style={{ marginBottom: '10px' }}>
// //         Stop Music
// //       </button>

// //       <audio ref={audioRef} loop>
// //         <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
// //         Your browser does not support the audio element.
// //       </audio>
// //     </div>
// //   );
// // };

// // export default BackgroundMusic;

// import React, { useEffect, useState } from 'react';


// function BackgroundMusic() {
//     const [button,setButton]=useState(true)

//   let initAudio = () => {
//     if(button == false){
//         const targetAudio = document.getElementsByClassName("audioBtn")[0];
//         targetAudio.play();
//     }

//   };
//   useEffect(()=>{
// setButton(false)
//   },[button])


//   return (
//     <div className="container">
//      <span style={{color:"red"}}>Click on the button for Music</span> <button style={{height:"40px"}} className="btn" onClick={initAudio}>
//         Play Mp3 Audio
//       </button> 

//       <audio className="audioBtn">
//   <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
// </audio>
//     </div>
//   );
// }

// export default BackgroundMusic;

import React, { useEffect, useState } from 'react';
import VideoComponent from './Video';

function BackgroundMusic() {
  const [button, setButton] = useState(true);

  let initAudio = () => {
    const targetAudio = document.getElementsByClassName("audioBtn")[0];
    if (button) {
      targetAudio.play();
      setButton(false);
    } else {
      targetAudio.pause();
      setButton(true);
    }
  };

  useEffect(() => {
    const targetAudio = document.getElementsByClassName("audioBtn")[0];
    targetAudio.pause();
    setButton(true);
  }, []);

  return (
    <>
    <div className="container">
      {/* <span style={{color:"red"}}>Click on the button for Music</span>
      <button style={{height:"40px"}} className="btn" onClick={initAudio}>
        {button ? 'Play Mp3 Audio' : 'Stop Mp3 Audio'}
      </button> */}

      <audio className="audioBtn">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
      </audio>
    </div>

    </>
  );
}

export default BackgroundMusic;



