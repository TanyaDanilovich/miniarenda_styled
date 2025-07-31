import styled from 'styled-components';
import {plainTransition} from '../../app/styles/mixins.ts';

export const S_DropdownText = styled.div<{ $maxHeight: string, $height: string }>`
  margin: 0;

  p {
    padding: 0 1rem 0 3.5rem;
    overflow: scroll;
    ${plainTransition()}
    max-height: ${({$maxHeight}) => $maxHeight};
    height: ${({$height}) => $height};


  }

`