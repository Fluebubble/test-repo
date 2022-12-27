import styled from 'styled-components';
import { color } from 'styled-system';

export const ColorBox = styled.div`
  height: ${p => {
    if (p.color === p.selectedColor) {
      return p.theme.space[6];
    }
    return p.theme.space[5];
  }}px;
  width: ${p => {
    if (p.color === p.selectedColor) {
      return p.theme.space[6];
    }
    return p.theme.space[5];
  }}px;
  /* background-color: ${p => p.theme.colors.primary}; */
  background-color: ${p => p.color};
`;
