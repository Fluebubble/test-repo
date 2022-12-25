import { useState } from 'react';
import Header from './Header/Header';
import Module from './Module/Module';
import ModuleFour from './ModuleFour/ModuleFour';
import { data } from 'modules';

export const App = () => {
  const { modules } = data;

  const [selectedBlock, setSelectedBlock] = useState('Module 1');
  console.log(data.modules[0].name);
  console.log(selectedBlock);

  return (
    <>
      <Header
        selectedBlock={selectedBlock}
        setSelectedBlock={setSelectedBlock}
        modules={modules}
      />
      {selectedBlock === data.modules[0].name && <Module module={modules[0]} />}
      {selectedBlock === data.modules[1].name && <Module module={modules[1]} />}
      {selectedBlock === data.modules[2].name && <Module module={modules[2]} />}
      {selectedBlock === data.modules[3].name && <Module module={modules[3]} />}
    </>
  );
};
