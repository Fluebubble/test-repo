import Button from 'components/Button/Button';
import MenuItem from 'components/MenuItem/MenuItem';
import styled from 'styled-components';
import { GrTest } from 'react-icons/gr';
import Box from 'components/Box/Box';

const Ul = styled.ul`
  display: flex;
  gap: 10px;
  /* max-width: 1200px; */
  /* margin: 0 auto; */
`;

const Menu = ({ setSelectedBlock, modules, selectedBlock }) => {
  // console.log(setSelectedBlock)
  return (
    <>
      <Box bg="background">
        <Ul>
          {modules.map(module => (
            <MenuItem
              name={module.name}
              key={module.id}
              setSelectedBlock={setSelectedBlock}
              // selectedBlock={selectedBlock}
            />
          ))}
          <Button icon={GrTest}>TestButton</Button>
        </Ul>
      </Box>
    </>
  );
};

export default Menu;
