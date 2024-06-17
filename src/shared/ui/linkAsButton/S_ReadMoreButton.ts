import styled, {css} from "styled-components";
import {plainTransition} from '../../../app/styles/mixins';
import {S_LinkAsButton} from './S_LinkAsButton';

export const S_ReadMoreButton = styled(S_LinkAsButton)<{}>`

  &:after {
    content: " ";
    position: absolute;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    right: -1.9rem;
    transform-origin: bottom left;
    -ms-transform: skew(-20deg, 0deg);
    transform: skew(-20deg, 0deg);
    border-left: 2px solid ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.bg_primary};

    ${plainTransition()}

  }


  &:hover {
    background-color: ${({theme}) => theme.colors.bg_primary};

    &:after {
      background-color: ${({theme}) => theme.colors.primary};
    }

    .fa-circle-plus {
      color: ${({theme}) => theme.colors.white};
      ${plainTransition()}
    }

    & span:nth-child(1) {
      background-color: ${({theme}) => theme.colors.bg_primary};
      ${plainTransition()}
    }
  }

`;


