import styled from 'styled-components';
import {outline} from '../../app/styles/mixins';

export const S_BackgroundWrapper = styled.div<{ $offset: number, $backgroundColor?: string, $paddingBlock?: string }>`
    //${outline(10)};
  position: relative;
  padding-block: ${({ $paddingBlock}) => $paddingBlock || "1px"};
  //overflow-x: hidden;

  &:after {
    //overflow-x: visible;
    content: "";
    width: 100vw;
    height: 100%;
    position: absolute;

    background-color: ${({theme, $backgroundColor}) => $backgroundColor || theme.colors.bg_primary};
    top: 0;
    left: ${({$offset}) => `-${$offset}px`};
    right: 0;
    z-index: -100;
  }
`