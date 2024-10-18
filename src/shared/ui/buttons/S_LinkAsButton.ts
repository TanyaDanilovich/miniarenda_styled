import styled from "styled-components";
import {outlinedNestedEverything, plainTransition} from '../../../app/styles/mixins';




export const S_LinkAsButton = styled.a<{}>`
  display: inline-block;
  vertical-align: center;
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  line-height:1;
  font-weight: 500;
  padding-block:8px;
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
`;


