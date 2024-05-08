import styled from "styled-components";
import {outline} from '../../../app/styles/mixins';
import {getResponsiveSize} from '../../utils/getResponsiveSize';
import {BASE} from '../../constants';


export const S_NavLink = styled.a<{}>`
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
`;