import Button from 'components/Button/Button';

const MenuItem = ({ name, setSelectedBlock, selectedBlock }) => {
  // console.log(setSelectedBlock);

  return (
    <li>
      <Button onClick={() => {
          setSelectedBlock(name);
        }}>{name}</Button>
    </li>
  );
};

export default MenuItem;
