import styled from 'styled-components';
import {outline} from '../../app/styles/mixins';

export const S_BackgroundWrapper = styled.div<{ $offset: number, $backgroundColor?: string }>`
    //${outline(10)};
  position: relative;
  padding-block: 3rem;
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