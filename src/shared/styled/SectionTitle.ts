import styled from "styled-components";

import {outline} from '../../styles/mixins';
import {theme} from '../../styles/Theme.styled';

type SectionTitleProps = {};
export const SectionTitle = styled.h2<SectionTitleProps>`
  line-height: 5rem;

  letter-spacing: 2px;

  position: relative;


    // ${outline()}
  &:before {
    position: absolute;
    content: "";
    display: block;
    height: 1px;

    left: -15px;
    transform: translateY(2.5rem) translateX(1rem);
  }

  @media ${({theme}) => theme.media.mobile} {
    &:before {
      display: none;
    }

    padding-left: 0;
    text-align: center;
  }
`;
