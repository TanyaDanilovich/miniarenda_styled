import styled from 'styled-components';
import {S_OuterContainer} from '../../../shared/styled/S_OuterContainer';
import {sectionMargin} from '../../../app/styles/mixins';

export const S_RentalWrapper = styled(S_OuterContainer)<{}>`
  ${sectionMargin};
 
  & h1 {
    text-wrap: none;
  }
  
  h1, h2 {
    font-size: ${({theme}) => theme.fonts.size.h1};
    text-align: center;
    //color: ${({theme}) => theme.colors.dark};
    font-weight: normal;
    white-space: pre-line;
    margin-block: 2rem;
  }
`