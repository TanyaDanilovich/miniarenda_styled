import styled from "styled-components";

import {outline} from '../../styles/mixins';

type ContainerProps = {};
export const Container = styled.div<ContainerProps>`
  margin-inline: auto;
  max-width: ${props=>props.theme.breakpoints.desktop};
  width: 100%;
  min-height: 100%;
  padding: 0 15px;
  margin: 0 auto;
  display: grid;
  align-self: center;
  position: relative;
  ${outline(5, "green")} @media ${({theme}) => theme.media.desktop} {
  max-width: ${({theme}) => theme.breakpoints.computer};
}

  @media ${({theme}) => theme.media.computer} {
    max-width: ${({theme}) => theme.breakpoints.tablet};
  }

  @media ${({theme}) => theme.media.tablet} {
    max-width: ${({theme}) => theme.breakpoints.mobile};
  }
`;
