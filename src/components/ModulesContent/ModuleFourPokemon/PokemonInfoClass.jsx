import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { PokemonDataView } from './PokemonDataView';
import { PokemonErrorView } from './PokemonErrorView';
import { PokemonPendingView } from './PokemonPendingView';
import { fetchPokemon } from './services/pokemon-api';

export class PokemonInfoClass extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      console.log(
        'Изменилось имя ',
        prevProps.pokemonName,
        ' на',
        this.props.pokemonName
      );
      this.setState({ status: 'loading' });
      setTimeout(() => {
        fetchPokemon(this.props.pokemonName)
          .then(pokemon => {
            console.log(pokemon);
            this.setState({ pokemon, status: 'resolved' });
          })
          .catch(error => {
            console.log(error);
            toast.error(error.message);
            this.setState({ error, status: 'rejected' });
          });
      }, 2000);

      // .finally(() => {
      //   this.setState({ status: 'idle' });
      // });
    }
  }

  render() {
    
    return (
      <>
        {this.state.status === 'idle' && <p>ENTER THE POKE NAME</p>}
        {this.state.status === 'loading' && (
          <PokemonPendingView pokemonName={this.props.pokemonName} />
        )}
        {this.state.status === 'rejected' && (
          <PokemonErrorView message={this.state.error.message} />
        )}
        {this.state.status === 'resolved' && (
          <PokemonDataView pokemon={this.state.pokemon} />
        )}
      </>
      // <>
      //   {this.state.isLoading && <p>ZAGROOZKA</p>}
      //   {this.state.error && <p>{this.state.error.message}</p>}
      //   {this.state.pokemon && (
      //     <>
      //       <p>Name is: {this.state.pokemon.name}</p>
      //       <img
      //         src={
      //           this.state.pokemon.sprites.other['official-artwork']
      //             .front_default
      //         }
      //         alt="poke"
      //         width="240px"
      //       />
      //     </>
      //   )}
      // </>
    );
  }
}
