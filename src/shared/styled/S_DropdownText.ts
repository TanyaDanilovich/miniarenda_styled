import styled from 'styled-components';
import {plainTransition} from '../../app/styles/mixins.ts';


// padding: 0 1rem 0 3.5rem;

export const S_DropdownText = styled.div<{
    $maxHeight: string,
    $height: string,
    $padding?: string
}>`
  margin: 0;
  padding: ${({$padding}) => $padding || '0'};
  overflow: scroll;
  
  p{
    ${plainTransition()}
    max-height: ${({$maxHeight}) => $maxHeight};
    height: ${({$height}) => $height};
  }
 


`