import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[1]}px;
  padding: ${props => props.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  background-color: ${props =>
    props.disabled ? props.theme.colors.muted : props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.body};
  border: 0px solid black;
  border-radius: ${props => props.theme.radii.borderRadius.small};

  :hover:not(:disabled),
  :focus:not(:disabled) {
    cursor: pointer;
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const Button = ({
  icon: Icon = null,
  type = 'button',
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {Icon && <Icon style={{ fill: '#00ec62' }} />}
      {children}
    </StyledButton>
  );
};
export default Button;
