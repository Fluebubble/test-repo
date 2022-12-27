// import ModuleContentBox from 'components/Module/Module';
import Box from 'components/Box/Box';
import { useState } from 'react';
import { ColorBox } from './ModuleFourColorPicker.styled';

const colorOptions = [
  { label: 'white', color: '#ffffff' },
  { label: 'blue', color: '#0044ff' },
  { label: 'green', color: '#00ff15' },
  { label: 'red', color: '#ff0000' },
  { label: 'yellow', color: '#eeff00' },
  { label: 'orange', color: '#ff9900' },
];

export const ModuleFourColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  console.log(selectedColor);
  return (
    // <div>KekModuleFour</div>
    <Box
      bg="background"
      mt={4}
      mb={4}
      p={4}
      color="text"
      border="plashka"
      borderRadius="borderRadius"
      display="flex"
      alignItems='center'
      gridGap={2}
    >
      {colorOptions.map(color => {
        return (
          <ColorBox
            key={color.label}
            colorName={color.label}
            color={color.color}
            selectedColor={selectedColor}
            onClick={() => setSelectedColor(color.color)}
          />
        );
      })}
    </Box>
  );
};
