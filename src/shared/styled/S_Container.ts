import styled from "styled-components";

import {outline} from '../../app/styles/mixins';

type ContainerProps = {};
export const S_Container = styled.div<ContainerProps>`
  margin-inline: auto;
  width: 100%;
  min-height: 100%;
  padding: 0 15px;
  margin: 0 auto;
  display: grid;
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
