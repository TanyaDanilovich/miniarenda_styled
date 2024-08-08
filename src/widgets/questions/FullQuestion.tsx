import React from 'react';
import styled, {css, useTheme} from 'styled-components';
import {S_Flex} from '../../shared/styled/S_Flex';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import {plainTransition} from '../../app/styles/mixins';
import {Question} from './Question';
import {Dropdown} from './Dropdown';


type props = {
    id: string,
    question: string,
    answer: string,
    toggleQuestionCallback: () => void,
    isOpen: boolean
}

export const FullQuestion = ({question, answer, id, toggleQuestionCallback, isOpen}: props) => {
    const theme = useTheme()

    const onToggleQuestion = () => toggleQuestionCallback()

    return (
        <S_FullQuestion $isOpen = {isOpen}>

            <S_Flex $align = {"center"} onClick = {onToggleQuestion}>

                <S_MinusContainer>
                    <FontAwesomeIcon icon = {faMinus} size = {'xl'} color = {theme.colors.primary}
                    />
                    <FontAwesomeIcon icon = {faMinus} size = {'xl'} color = {theme.colors.primary}
                    />
                </S_MinusContainer>


                <Question text = {question}/>

            </S_Flex>


            <Dropdown text = {answer} isOpen = {isOpen}/>

        </S_FullQuestion>);
};


export const S_FullQuestion = styled.div<{ $isOpen: boolean }>`
  position: relative;
  border: 1px solid ${({theme}) => theme.colors.gray};

  svg {
    ${plainTransition()}
    &:first-child {
      transform: rotate(90deg);
    }

    &:last-child {
      opacity: 1;
    }

    ${({$isOpen}) => $isOpen && css`
      &:first-child {
        transform: rotate(180deg);
        color: ${({theme}) => theme.colors.gray};
      }

      &:last-child {
        transform: rotate(90deg);
        opacity: 0;
      }
    `
    }
  }

  ${S_Flex} {
    background-color: transparent;
    ${({$isOpen}) => $isOpen && css`
      background-color: ${({theme}) => theme.colors.gainsboro};
    `
    }
`


const S_MinusContainer = styled.div<{}>`
  position: relative;
  width: 1.5em;
  height: 1.5em;
  margin-left: 1rem;

  svg {
    position: absolute;
  }
`