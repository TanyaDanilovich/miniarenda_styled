import styled from "styled-components";
import {outline, plainTransition} from '../../../app/styles/mixins';


export const
    S_NavItem = styled.li<{}>`

      &, & > a {
        ${plainTransition()}
      }

      &:hover {
        background-color: ${({theme}) => theme.colors.dark};
        color: ${({theme}) => theme.colors.primary};
      }

      &:hover > a {
        color: ${({theme}) => theme.colors.primary};
      }

      border-bottom: 1px solid ${({theme}) => theme.colors.dark};

      &:first-child {
        border-top: 1px solid ${({theme}) => theme.colors.dark};
      }

      &:focus {
        background-color: ${({theme}) => theme.colors.lightSlateGray};
      }

      @media ${({theme}) => theme.media.tablet} {
        &, &:first-child {
          border: none;

        }

      }
    `;