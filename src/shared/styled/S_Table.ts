import styled from 'styled-components';
import {getResponsiveSize} from '../utils/getResponsiveSize';
import {BASE} from '../constants/constants';
import {outline, plainTransition} from '../../app/styles/mixins';


export const S_TableTitle = styled.caption <{}>`
  position: relative;
  z-index: 10;
  text-align: center;
  font-weight: ${({theme}) => theme.fonts.weight.bold};
  font-size: ${({theme}) => theme.fonts.size.h3};
  margin: 2rem;
`;

export const S_Table = styled.table<{}>`
  //width: max-content;
  position: relative;
  z-index: 10;
  margin: auto;
  overflow-x: auto;
  //width: 100%;
  border-collapse: collapse;

  th, td {
    border-bottom: 1px solid #ddd;
    padding-block: ${getResponsiveSize(BASE / 3, BASE / 2, 320)};
    padding-inline: ${getResponsiveSize(BASE * 0.5, BASE, 320)};
  }

  td:nth-child(odd) {
    width: 45%;
      //${outline()}

  }

  td:nth-child(even) {
    width: 55%;
      //${outline(1, "green")}
  }
`
export const S_Tr = styled.tr<{}>`

  ${plainTransition()}
  &:hover {
    background-color: ${({theme}) => theme.colors.white_smoke};
  }
`;


