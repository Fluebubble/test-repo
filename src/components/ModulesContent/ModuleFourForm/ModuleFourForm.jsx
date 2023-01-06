// import ModuleContentBox from 'components/Module/Module';
import Box from 'components/Box/Box';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

export const ModuleFourForm = () => {
  const [name, setName] = useLocalStorage('name', '');
  const [phone, setPhone] = useLocalStorage('phone', '');

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'phone') {
      setPhone(e.target.value);
    }
  };

  // useEffect(() => {
  //   window.localStorage.setItem('name', JSON.stringify(name));
  // }, [name]);

  // useEffect(() => {
  //   window.localStorage.setItem('phone', JSON.stringify(phone));
  // }, [phone]);

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
    >
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
