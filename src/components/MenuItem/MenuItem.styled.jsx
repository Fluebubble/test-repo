import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[1]}px;
  padding: ${props => props.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  background-color: ${props => {
    if (props.disabled) {
      return props.theme.colors.muted;
    }
    if (props.selectedBlock === props.name) {
      return props.theme.colors.highlight;
    }
    return props.theme.colors.primary;
  }};
  font-family: ${props => props.theme.fonts.body};
  border: 0px solid black;
  border-radius: ${props => props.theme.radii.borderRadius.small};

  :hover:not(:disabled) {
    cursor: pointer;
    background-color: ${props => props.theme.colors.secondary};
  }
  :focus:not(:disabled){
    
  }
`;
