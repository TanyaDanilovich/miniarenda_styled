import styled from "styled-components";
import {outlinedNestedEverything, plainTransition} from '../../../app/styles/mixins';
import {S_LinkAsButton} from './S_LinkAsButton';
import indent from "../../../assets/png/indent.png"

export const S_ContactUs = styled(S_LinkAsButton)<{}>`

  padding-right: 50px;

  display: inline-block;
  position: relative;

  span {
    &:after {
      content: "";
      position: absolute;
      line-height: 1.5rem;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      z-index: -1;
      display: inline-block;
      width: 2.5rem;
      height: 1.5rem;
      background-color: ${({theme}) => theme.colors.bg_primary};
      background-image: url(${indent});
      background-position: 80% 50%;
      background-repeat: no-repeat;
      clip-path: polygon(0 0, 100% 0%, 100% 100%, 50% 100%);
      ${plainTransition()}
    }
  }

  &:hover {
    background-color: ${({theme}) => theme.colors.secondary};
  }


`;


