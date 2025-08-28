import styled from 'styled-components';
import {plainTransition} from '../../app/styles/mixins.ts';


export const S_DropdownText = styled.div<{
    $maxHeight: string,
    $height: string,
    $padding?: string
}>`
    margin:0;
    

    p{
        ${plainTransition()}
        padding:${({$padding}) => $padding || '0'};
        max-height:${({$maxHeight}) => $maxHeight};
        height:${({$height}) => $height};
    }



`