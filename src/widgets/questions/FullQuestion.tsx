import React, {useState} from 'react';
import styled, {css, useTheme} from 'styled-components';
import {S_Flex} from '../../shared/styled/S_Flex';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import {plainTransition} from '../../app/styles/mixins';
import {QuestionText} from './QuestionText';
import {AnswerText} from './AnswerText';


type props = {
    question: string,
    answer: string
}

export const FullQuestion = ({question, answer}: props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const theme = useTheme()

    const openToggle = () => setIsOpen(prev => !prev)

    return (
        <S_FullQuestion $isOpen = {isOpen}>

            <S_Flex $align = {"center"}>

                <S_MinusContainer>
                    <FontAwesomeIcon icon = {faMinus} size = {'xl'} color = {theme.colors.primary}
                                     onClick = {openToggle}/>
                    <FontAwesomeIcon icon = {faMinus} size = {'xl'} color = {theme.colors.primary}
                                     onClick = {openToggle}/>
                </S_MinusContainer>


                <QuestionText text = {question} callback = {openToggle}/>

            </S_Flex>


            <AnswerText text = {answer} isOpen = {isOpen}/>

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
    ${plainTransition()}
  
    padding: 1rem;
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

  svg {
    position: absolute;

  }
`