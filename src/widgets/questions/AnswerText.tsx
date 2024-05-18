import React from 'react';
import styled, {css} from 'styled-components';
import {plainTransition} from '../../app/styles/mixins';


export const AnswerText = ({text, isOpen}: { text: string, isOpen: boolean }) => {


    return (
        <S_AnswerText $isOpen = {isOpen}>
            {text}
            {/*{isOpen && text}*/}
        </S_AnswerText>);
};


export const S_AnswerText = styled.p<{ $isOpen: boolean }>`
  padding: 0 1rem 0 3.5rem;
  height: 0;
  margin: 0;
  overflow: hidden;
  ${plainTransition()}

  ${({$isOpen}) => $isOpen && css`
    height: 100%;
    padding: 1rem 1rem 1rem 3.5rem;
  `}
`

