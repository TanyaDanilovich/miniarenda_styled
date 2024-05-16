import styled from "styled-components";
import checkmark from "../../../assets/icons/checkmark-circle-green.svg"
import {fullAbsoluteElement, outlinedNestedDiv} from '../../../app/styles/mixins';

export const S_UserLetter = styled.div<{}>`

  border-radius: 50%;
  background: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.white};
  font-weight: ${({theme}) => theme.fonts.weight.semiBold};
  font-size: 1.25rem;
  line-height: 3rem;
  width: 3rem;
  text-align: center;
  position: relative;


  &:after {
    position: absolute;
    content: url(${checkmark});
    line-height: 20px;
    bottom: 0;
    right: 0;
    background: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
`

export const S_UserName = styled.div<{}>`
    //background-color: ${({theme}) => theme.colors.red.b100};
  flex-grow: 1;
  font-size: ${({theme}) => theme.fonts.size.h4};
  font-weight: ${({theme}) => theme.fonts.weight.semiBold};
  text-align: center;
`


export const S_ReviewCard = styled.div<{}>`
  padding: 1rem;
  margin-top: 4rem;
  width: 100%;
  background-color: ${({theme}) => theme.colors.white};
  position: relative;
  z-index: 50;
  box-shadow: ${({theme}) => theme.shadow.full};

  // &:before {
  //   content: close-quote;
  //   position: absolute;
  //   z-index: 0;
  //   display: block;
  //   height: 4rem;
  //   width: 4rem;
  //   bottom: 0;
    //   ${outlinedNestedDiv};
  //   right: 0;
    //      background-color: ${({theme}) => theme.colors.red.b100};
    //   box-shadow: ${({theme}) => theme.shadow.full};
  // }

  // &:after {
  //   content: " ";
  //   position: absolute;
  //   z-index: -3;
  //   display: block;
  //   width: 96%;
  //   height: 60px;
  //   bottom: 4px;
  //   left: 0;
  //   transform-origin: left bottom;
  //   transform: rotate(3deg);
    //   background-color: ${({theme}) => theme.colors.white};
  // }

    //    ${outlinedNestedDiv}
`