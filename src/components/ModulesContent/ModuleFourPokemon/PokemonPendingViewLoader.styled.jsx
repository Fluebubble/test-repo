import { AiOutlineLoading } from 'react-icons/ai';
import styled from 'styled-components';

export const PokemonPendingViewLoader = styled(AiOutlineLoading)`
  @keyframes animate115 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  animation: animate115 2s infinite linear;
  height: 35px;
  width: 35px;
`;
