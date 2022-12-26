import Button from 'components/Button/Button';
import { StyledButton } from './MenuItem.styled';

const MenuItem = ({ name, setSelectedBlock, selectedBlock }) => {
  // console.log(setSelectedBlock);
  console.log(`selectedBlock = ${selectedBlock}, name = ${name}`);
  // const selectedButtonClass = {
  //   border: '2px solid red',
  // };
  if (selectedBlock === name) {
  }
  return (
    <li>
      <StyledButton
        onClick={() => {
          setSelectedBlock(name);
        }}
        name={name}
        selectedBlock={selectedBlock}
        // style={selectedButtonClass}
      >
        {name}
      </StyledButton>
    </li>
  );
};

export default MenuItem;
