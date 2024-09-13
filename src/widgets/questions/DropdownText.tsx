import React from 'react';
import styled, {css} from 'styled-components';
import {plainTransition} from '../../app/styles/mixins';


export const DropdownText = ({text, isOpen}: { text: string, isOpen: boolean }) => {

    const maxHeight = isOpen ? "24rem" : "0";
    const height = isOpen ? "100%" : "0"


    return (
        <S_DropdownText $maxHeight = {maxHeight} $height = {height}>
            <p>
                {text}
            </p>
        </S_DropdownText>);
};


export const S_DropdownText = styled.div<{ $maxHeight: string, $height: string }>`
  margin: 0;

  p {
    padding: 0 1rem 0 3.5rem;
    overflow: hidden;
    ${plainTransition()}
    max-height: ${({$maxHeight}) => $maxHeight};
    height: ${({$height}) => $height};

    ${({$height}) => $height !== "0" && css`
      padding: 1rem 1rem 1rem 3.5rem;
    `}
  }

`

