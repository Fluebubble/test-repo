import ModuleMenu from 'components/ModuleMenu/ModuleMenu';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { ModuleFourForm } from 'components/ModulesContent/ModuleFourForm/ModuleFourForm';
import { Title } from './Module.styled';
import { ModuleFourColorPicker } from 'components/ModulesContent/ModuleFourColorPicker/ModuleFourColorPicker';

const ModuleWrapper = styled.div`
  max-width: 1200px;
  margin: 50px auto;
`;

const Module = ({ module }) => {
  const { name, apps } = module;
  console.log('apps[0] = ', apps[0]);
  const [selectedApp, setSelectedApp] = useState(() => apps[0]);
  const handleClick = app => {
    setSelectedApp(app);
  };
  useEffect(() => {
    console.log('selectedApp is updated and now its = ', selectedApp);
    // return <p>KEKLOL</p>;
  }, [selectedApp]);

  return (
    <ModuleWrapper>
      <Title>{name}</Title>
      <ModuleMenu
        apps={apps}
        selectedApp={selectedApp}
        handleClick={handleClick}
      />
      <Title>{selectedApp}</Title>
      {selectedApp === 'Form' && <ModuleFourForm />}
      {selectedApp === 'Color Picker' && <ModuleFourColorPicker />}
    </ModuleWrapper>
  );
};

export default Module;
