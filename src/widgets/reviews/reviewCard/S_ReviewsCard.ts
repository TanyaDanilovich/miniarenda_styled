import styled from "styled-components";
import checkmark from "../../../assets/icons/checkmark-circle-green.svg"
import {fullAbsoluteElement, outline, outlinedNestedDiv, outlinedNestedEverything} from '../../../app/styles/mixins';
import {S_Flex} from '../../../shared/styled/S_Flex';

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
  flex-shrink: 0;

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
  //flex-grow: 1;
  font-size: ${({theme}) => theme.fonts.size.p};
  font-weight: ${({theme}) => theme.fonts.weight.bold};
  //text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100%);
  max-width: 100%;
`


export const S_ReviewCard = styled.div<{}>`
  padding: 1rem;
  margin: 4rem auto 0;
  width: calc(100% - 2rem);
  min-height: 220px;
  background-color: ${({theme}) => theme.colors.white};
  position: relative;
  z-index: 50;
  box-shadow: ${({theme}) => theme.shadow.full};

  & > ${S_Flex}  {
    //background-color: ${({theme}) => theme.colors.red.b400};
  }
  
  & > ${S_Flex} > ${S_Flex} {
    background-color: ${({theme}) => theme.colors.grey.b400};
    flex: 0 1 auto;
    max-width: 100%;
  }


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