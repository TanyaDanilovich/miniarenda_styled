import React from 'react';
import styled from 'styled-components';


export const Question = ({text, callback}: { text: string, callback: () => void }) => {


    return (
        <S_QuestionText onClick = {callback}>
            {text}
        </S_QuestionText>)
}



export const S_QuestionText = styled.p<{  }>`
  padding: 1rem;
  cursor: pointer;
  flex-grow: 1;
`

