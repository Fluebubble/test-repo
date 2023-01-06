import React, { Component } from 'react';
import { toast } from 'react-toastify';

export class PokemonSearchFormClass extends Component {
  state = {
    pokemonName: '',
  };
  handleNameChange = e => {
    this.setState({ pokemonName: e.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.pokemonName.trim() === '') {
      toast.error('INPUT THE NAME');
      return;
    }
    
    this.props.onSubmit(this.state.pokemonName);
  };
  render() {
    return (
      <>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Pokemon name
            <input type="text" onChange={this.handleNameChange} />
          </label>
          <button type="submit">Search</button>
        </form>
      </>
    );
  }
}
