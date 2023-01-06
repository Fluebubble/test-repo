// import ModuleContentBox from 'components/Module/Module';
import Box from 'components/Box/Box';
import { useState, useEffect, useRef } from 'react';
import { ColorBox, TotalClicks } from './ModuleFourPokemon.styled';
import { PokemonSearchFormClass } from './PokemonSearchForm';

export const ModuleFourPokemon = () => {
  // const [good, setGood] = useState('GOOD');
  // const [bad, setBad] = useState('BAD');
  // const [neutral, setNeutral] = useState('NEUTRAL');

  // const state = { good, bad, neutral };

  // console.log(state);

  return (
    <Box bg="background" p={4} color="text">
      <PokemonSearchFormClass />
    </Box>
  );
};
