import styled from "styled-components";

import {outline} from '../../app/styles/mixins';

type ContainerProps = {
    $padding?: string;
};
export const S_InnerContainer = styled.div<ContainerProps>`
  padding: ${({$padding}) => $padding || 0};
  margin-inline: auto;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  align-self: center;
  position: relative;
    //${outline(5, "green")};


  @media ${({theme}) => theme.media.tablet} {
    max-width: 750px;
  }

  @media ${({theme}) => theme.media.computer} {
    max-width: 970px;
  }

  @media ${({theme}) => theme.media.desktop} {
    max-width: 1170px;
  }
`;
