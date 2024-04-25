import styled, {css} from "styled-components";
import {ButtonsType} from '../../types/common.types';
import {plainTransition} from '../../../app/styles/mixins';


type LinkAsButtonProps = {
    $type: ButtonsType,
};


export const S_LinkAsButton = styled.a<LinkAsButtonProps>`

  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;
  padding-block: 5px;
  padding-right: 0.5rem;
  padding-left: 1.5rem;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.primary};
  position: relative;
  overflow: hidden;
  z-index: 10;

  ${plainTransition()}
  & span:nth-child(2) {
    position: relative;
    display: inline-block;
    z-index: 100;
    padding-left: 3px;
  }

  ${({$type}) =>
          $type === "read more" && css`
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
            }`
  }
  &:hover {
    background-color: ${({theme}) => theme.colors.bg_primary};

    .fa-circle-plus {
      color: ${({theme}) => theme.colors.white};
      ${plainTransition()}
    }

    ${({$type}) =>
            $type === "read more" && css`
              &:after {
                background-color: ${({theme}) => theme.colors.secondary};
              }`
    }
    & span:nth-child(1) {
      background-color: ${({theme}) => theme.colors.bg_primary};
      ${plainTransition()}
    }
  }
`;


