// import ModuleContentBox from 'components/Module/Module';
import Box from 'components/Box/Box';
import { useState } from 'react';

export const ModuleFourForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'phone') {
      setPhone(e.target.value);
    }
  };

  return (
    // <div>KekModuleFour</div>
    <Box bg='background' mt={4} mb={4} p={4} color='text' border='plashka' borderRadius='borderRadius'>
      <form>
        <label>
          Name
          <input type="text" onChange={handleChange} value={name} name="name" />
        </label>
        <label>
          Phone
          <input
            type="number"
            onChange={handleChange}
            value={phone}
            name="phone"
          />
        </label>
        <button type="submit">Start!</button>
      </form>
    </Box>
  );
};
