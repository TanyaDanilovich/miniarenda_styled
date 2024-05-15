import React, {useState} from 'react';
import styled, {css, useTheme} from 'styled-components';
import {S_Flex} from '../../shared/styled/S_Flex';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import {plainTransition} from '../../app/styles/mixins';


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


export const QuestionText = ({text, callback}: { text: string, callback: () => void }) => {


    return (
        <S_QuestionText onClick = {callback}>
            {text}
        </S_QuestionText>)
}

export const AnswerText = ({text, isOpen}: { text: string, isOpen: boolean }) => {


    return (
        <S_AnswerText $isOpen = {isOpen}>
            {text}
            {/*{isOpen && text}*/}
        </S_AnswerText>);
};


export const S_FullQuestion = styled.div<{ $isOpen: boolean }>`
  position: relative;
  padding-block: 1rem;
  padding-left: 1rem;
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
    `}

  }
`

export const S_QuestionText = styled.p<{}>`
  padding-left: 1rem;
  margin: 0;
  cursor: pointer;
`

export const S_AnswerText = styled.p<{ $isOpen: boolean }>`
  padding-left: 2.5rem;
  height: 0;
  margin: 0;
  overflow: hidden;
  ${plainTransition()}
  ${({$isOpen}) => $isOpen && css`
    height: 100%;
    margin-top: 0.5rem;
  `}
`

const S_MinusContainer = styled.div<{}>`
  position: relative;
  width: 1.5em;
  height: 1.5em;

  svg {
    position: absolute;

  }
`