// import ModuleContentBox from 'components/Module/Module';
import Box from 'components/Box/Box';
import { useState, useEffect, useRef } from 'react';
import { ColorBox, TotalClicks } from './ModuleFourCounter.styled';

const colorOptions = [
  { label: 'white', color: '#ffffff' },
  { label: 'blue', color: '#0044ff' },
  { label: 'green', color: '#00ff15' },
  { label: 'red', color: '#ff0000' },
  { label: 'yellow', color: '#eeff00' },
  { label: 'orange', color: '#ff9900' },
];

export const ModuleFourCounter = () => {
  

  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(prevState => prevState + 1);
  };
  const handleCounterBIncrement = () => {
    setCounterB(prevState => prevState + 1);
  };
  const resetCounters = () => {
    setCounterA(0);
    setCounterB(0);
  };

  const totalClicks = counterA + counterB;

  useEffect(() => {
    console.log('Запускается useEffect | ModuleFourCounter.jsx');
  }, [counterA]);

 
  return (
    // <div>KekModuleFour</div>
    <Box bg="background" p={4} color="text">
      <TotalClicks>{totalClicks}</TotalClicks>
      <Box
        // bg="background"
        // mt={4}
        // mb={4}
        // p={4}
        color="text"
        border="plashka"
        borderRadius="borderRadius"
        display="flex"
        alignItems="center"
        gridGap={2}
      >
        <button onClick={handleCounterAIncrement}>
          Counter A {counterA} clicked
        </button>
        <button onClick={handleCounterBIncrement}>
          Counter B {counterB} clicked
        </button>
        <button onClick={resetCounters}>Reset counters</button>
      </Box>
    </Box>
  );
};
