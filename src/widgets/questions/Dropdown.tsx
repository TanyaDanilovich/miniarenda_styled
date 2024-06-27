import React, {useEffect, useRef} from 'react';
import styled, {css} from 'styled-components';
import {outline, plainTransition} from '../../app/styles/mixins';


export const Dropdown = ({text, isOpen}: { text: string, isOpen: boolean }) => {

    const maxHeight = isOpen ? "6rem" : "0";
    const height = isOpen ? "100%" : "0"

    return (
        <S_Dropdown $maxHeight = {maxHeight} $height = {height}>
            <p>
                {text}
            </p>
        </S_Dropdown>);
};


export const S_Dropdown = styled.div<{ $maxHeight: string, $height: string }>`
  ${plainTransition()}
  padding: 0 1rem 0 3.5rem;
  margin: 0;

  ${({$height}) => $height !== "0" && css`
    padding: 1rem 1rem 01rem 3.5rem;
  `}
  p {
    overflow: hidden;
    ${plainTransition()}
    max-height: ${({$maxHeight}) => $maxHeight};
    height: ${({$height}) => $height};
  }

`

