import { useState } from 'react';
import Header from './Header/Header';
import Module from './Module/Module';
// import ModuleFour from './ModuleFour/ModuleFour';
import { data } from 'modules';
import { ModuleOneBox } from './ModulesContent/ModuleOne/ModuleOneBox';
import { ModuleFour } from './ModulesContent/ModuleFourForm/ModuleFourForm';

export const App = () => {
  const { modules } = data;

  const [selectedBlock, setSelectedBlock] = useState('Module 4');
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
      {selectedBlock === data.modules[4].name && <Module module={modules[4]} />}
      {selectedBlock === data.modules[5].name && <Module module={modules[5]} />}
      {selectedBlock === data.modules[6].name && <Module module={modules[6]} />}
      <ModuleOneBox />
      {/* <ModuleFour /> */}
    </>
  );
};
