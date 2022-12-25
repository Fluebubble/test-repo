import ModuleContentBox from 'components/Module/Module';
import { useState } from 'react';

const ModuleFour = () => {
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
    <ModuleContentBox>
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
    </ModuleContentBox>
  );
};

export default ModuleFour;
