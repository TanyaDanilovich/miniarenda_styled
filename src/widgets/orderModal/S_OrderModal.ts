import styled from "styled-components";
import {sectionMargin} from '../../app/styles/mixins';
import {S_Flex} from '../../shared/styled/S_Flex';



export const S_OrderModal = styled.div<{}>`
  display: none;
  padding-block: 1rem;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.black};
  margin-bottom: 0.25rem;
  position: relative;
  z-index: 2;

  ${S_Flex} {
    align-items: center;
    justify-content: space-between;

    h4 {
      line-height: 1.5;
    }

    div {
      width: 40%;
      text-align: center;
    }
  }

  &:before {
    position: absolute;
    content: "";
    width: 60%;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    display: block;
    top: 0;
    right: 0;
    background-color: ${({theme}) => theme.colors.primary};
    border-right: 4px solid #ffffff;
    transform-origin: bottom left;
    transform: skew(15deg, 0deg);
  }

  button {
    padding: 0.5rem;
  }

  @media ${({theme}) => theme.media.mobile} {
    display: block;
  }
`

