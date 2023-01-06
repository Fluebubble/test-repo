import { useRef } from 'react';
import Box from 'components/Box/Box';

export const ModuleFourVideo = ({ source }) => {
  const playerRef = useRef();
  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();

  return (
    <Box bg='background' p={5}>
      <div>
        <video ref={playerRef} src={source}>
          Sorry, your browser does not support embedded videos.
        </video>
        <div>
          <button onClick={play}>Play</button>
          <button onClick={pause}>Pause</button>
        </div>
      </div>
    </Box>
  );
};
