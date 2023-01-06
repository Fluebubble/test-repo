import { AiOutlineLoading } from 'react-icons/ai';
import { PokemonPendingViewLoader } from './PokemonPendingViewLoader.styled';
import pendingImage from '../../../images/5de3ac52f31664972b57698eb8a1a37a.jpg';
import { PokemonDataView } from './PokemonDataView';

export const PokemonPendingView = ({ pokemonName }) => {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    abilities: [],
  };
  return (
    <>
      <div>
        {/* <AiOutlineLoading /> */}
        <PokemonPendingViewLoader />
        Загружаем...
      </div>
      <PokemonDataView pokemon={pokemon} />
    </>
  );
};
