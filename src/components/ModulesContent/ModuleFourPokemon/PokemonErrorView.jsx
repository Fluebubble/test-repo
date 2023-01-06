import errorImage from '../../../images/sadcat.webp';

export const PokemonErrorView = ({ message }) => {
  return (
    <div role="alert">
      <img src={errorImage} width="240" alt="sad cat" />
      <p>{message}</p>
    </div>
  );
};
