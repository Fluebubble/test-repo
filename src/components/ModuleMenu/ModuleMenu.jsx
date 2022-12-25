import styled from 'styled-components';
import Button from 'components/Button/Button';

const ModuleMenuBox = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ModuleMenu = ({ apps }) => {
  return (
    <ModuleMenuBox>
      {apps.map((app, idx) => {
        return (
          <li key={idx}>
            <Button type="button">{app}</Button>
          </li>
        );
      })}
    </ModuleMenuBox>
  );
};
export default ModuleMenu;
