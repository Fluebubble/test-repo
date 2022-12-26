import styled from 'styled-components';

export const Title = styled('h1')({
  display: 'flex',
  'justify-content': 'center',
  color: p => p.theme.colors.primary,
});
