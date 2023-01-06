// import ModuleContentBox from 'components/Module/Module';
import Box from 'components/Box/Box';
import React, { Component, useEffect, useState, useRef } from 'react';

// export class ModuleFourClocks extends Component {
//   state = { time: new Date() };
//   intervalId = null;

//   stop = () => {
//     clearInterval(this.intervalId);
//     console.log("interval cleared", this.intervalId)
//   };

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log('Интервалится каждую 1 секунду', Date.now());
//       this.setState({ time: new Date() });
//       console.log(this.intervalId)
//     }, 1000);
//   }
//   render() {
//     return (
//       <Box
//         bg="background"
//         mt={4}
//         mb={4}
//         p={4}
//         color="text"
//         border="plashka"
//         borderRadius="borderRadius"
//       >
//         <p>{this.state.time.toLocaleTimeString()}</p>
//         <button type="button" onClick={this.stop}>
//           Stop
//         </button>
//       </Box>
//     );
//   }
// }

export const ModuleFourClock = () => {
  const [time, setTime] = useState(() => new Date());

  const intervalId = useRef(null);
  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('Интервалится каждую 1 секунду', Date.now());
      console.log(intervalId.current);
      setTime(new Date());
    }, 1000);

    return () => {
      stop();
      console.log('Это функция перед размонтированием компонента'+ intervalId.current);
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    // <div>KekModuleFour</div>
    <Box
      bg="background"
      mt={4}
      mb={4}
      p={4}
      color="text"
      border="plashka"
      borderRadius="borderRadius"
    >
      <p>{time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </Box>
  );
};
