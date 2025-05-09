import styled from "styled-components";

import {outline} from '../../app/styles/mixins';
import {getResponsiveSize} from '../utils/getResponsiveSize';
import {BASE} from '../constants/constants';

type ContainerProps = {};
export const S_OuterContainer = styled.div<ContainerProps>`
  margin-inline: auto;
  width: 100%;
  min-height: 100%;
  padding: 0 ${getResponsiveSize(BASE, BASE * 3.5, 320, 768,)};
  margin: 0 auto;
  align-self: center;
  position: relative;
    //${outline(5, "green")};


  @media ${({theme}) => theme.mediaMinWidth.tablet} {
    padding: 0 1rem;
    max-width: 750px;
  }

  @media ${({theme}) => theme.mediaMinWidth.computer} {
    padding: 0;
    max-width: 970px;
  }

  @media ${({theme}) => theme.mediaMinWidth.desktop} {
    max-width: 1170px;
  }
`;
