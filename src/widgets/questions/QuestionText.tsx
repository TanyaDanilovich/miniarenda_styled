import React from 'react';
import styled from 'styled-components';


export const QuestionText = ({text, callback}: { text: string, callback: () => void }) => {


    return (
        <S_QuestionText onClick = {callback}>
            {text}
        </S_QuestionText>)
}



export const S_QuestionText = styled.p<{  }>`
  padding-left: 1rem;
  margin: 0;
  cursor: pointer;
  flex-grow: 1;
`

