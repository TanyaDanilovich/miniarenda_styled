import React from 'react';
import styled from 'styled-components';


export const Question = ({text}: { text: string }) => {


    return (
        <S_QuestionText>
            {text}
        </S_QuestionText>)
}


export const S_QuestionText = styled.p<{}>`
  padding: 1rem;
  cursor: pointer;
  flex-grow: 1;
`

