import styled from 'styled-components';
import Button from 'components/Button/Button';
import { useState } from 'react';
import Box from 'components/Box/Box';
const ModuleMenuBox = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ModuleMenu = ({ apps, handleClick}) => {
  console.log('apps = ', apps);



  return (
    <Box
     display='flex' 
     gridGap={3}
     bg='background'
     p={3}
     >
      {apps.map((app, idx) => {
        return (
          <li key={idx}>
            <Button type="button" onClick={() => handleClick(app)}>
              {app}
            </Button>
          </li>
        );
      })}
    </Box>
  );
};
export default ModuleMenu;
