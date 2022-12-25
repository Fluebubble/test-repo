import ModuleMenu from 'components/ModuleMenu/ModuleMenu';
import styled from 'styled-components';


const ModuleWrapper = styled.div`
  max-width: 1200px;
  margin: 50px auto;
`;

const Module = ({ module }) => {
  return (
    <ModuleWrapper>
      <h1>{module.name}</h1>
      <ModuleMenu apps={module.apps}/>
    </ModuleWrapper>
  );
};

export default Module;
