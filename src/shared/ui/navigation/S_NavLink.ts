import styled from "styled-components";
import {outline} from '../../../app/styles/mixins';
import {getResponsiveSize} from '../../utils/getResponsiveSize';
import {BASE} from '../../constants';
import {NavLink} from 'react-router-dom';


export const S_NavLink = styled(NavLink)<{}>`
    //${outline()}
  display: inline-block;
  width: 100%;
  color: ${({theme}) => theme.colors.white};
  cursor: pointer;
  padding-inline: ${getResponsiveSize(3 * BASE, 6 * BASE, 360, 767)};
  padding-block: 1rem;
  font-size: 1rem;
  font-weight: ${({theme}) => theme.fonts.weight.medium};
  letter-spacing: 1px;
  text-transform: uppercase;

  &.active {
    color: ${({theme}) => theme.colors.primary};
  }

  @media ${({theme}) => theme.media.tablet} {
    padding: 1rem 0.75rem;

  }
`;