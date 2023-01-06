// import ModuleContentBox from 'components/Module/Module';
import Box from 'components/Box/Box';
import { useState, useEffect, useRef } from 'react';
import { ColorBox, TotalClicks } from './ModuleFourPokemon.styled';
import { PokemonSearchFormClass } from './PokemonSearchFormClass';
import React, { Component } from 'react';
import { PokemonInfoClass } from './PokemonInfoClass';

export class ModuleFourPokemonClass extends Component {
  state = {
    pokemonName: '',
    isLoading: false,
  };
  handleSubmit = name => {
    // e.preventDefault();

    this.setState({ pokemonName: name });
  };
  render() {
    return (
      <Box bg="background" p={4} color="text">
        <PokemonSearchFormClass onSubmit={this.handleSubmit} />
        <PokemonInfoClass pokemonName={this.state.pokemonName} />
      </Box>
    );
  }
}
