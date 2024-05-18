import {S_Container} from '../../shared/styled/S_Container';
import React, {useId} from 'react';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {questionsData} from './questionsData';
import {FullQuestion} from './FullQuestion';
import {S_Flex} from '../../shared/styled/S_Flex';
import styled from 'styled-components';
import {sectionMargin} from '../../app/styles/mixins';


type props = {};
export const Questions = ({}: props) => {

    const id = useId()

    return (
        <S_Questions>

            <S_Container>
                <SectionTitle title = {"Вопросы и ответы"}/>

                <S_Flex $direction = {'column'} $gap = {"1rem"}>
                    {questionsData.map((q, index) =>
                        <FullQuestion key = {`${id}-${index}`}
                                      question = {q.question}
                                      answer = {q.answer}
                        />)}
                </S_Flex>

            </S_Container>
        </S_Questions>);
};


export const S_Questions = styled.section<{}>`
  background-color: ${({theme}) => theme.colors.white};
  ${sectionMargin}
`
