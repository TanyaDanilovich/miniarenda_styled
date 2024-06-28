import {S_Container} from '../../shared/styled/S_Container';
import React, {useId, useState} from 'react';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {questionsData} from './questionsData';
import {FullQuestion} from './FullQuestion';
import {S_Flex} from '../../shared/styled/S_Flex';
import styled from 'styled-components';
import {sectionMargin} from '../../app/styles/mixins';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';


type props = {};
export const Questions = ({}: props) => {
    const [openIndex, setOpenIndex] = useState<string | null>(null)
    const id = useId()

    const toggleQuestion = (index: string) => {
        setOpenIndex(openIndex !== index ? index : null)
    };


    return (
        <S_Questions>

            <S_Container>

                <SectionTitle title = {"Вопросы и ответы"}/>

                <S_Flex $direction = {'column'} $gap = {"1rem"}>
                    {questionsData.map((q, index) => <FullQuestion id = {`${id}-${index}`}
                                                                   key = {`${id}-${index}`}
                                                                   question = {q.question}
                                                                   answer = {q.answer}
                                                                   callback = {() => toggleQuestion(`${id}-${index}`)}
                                                                   isOpend = {openIndex === `${id}-${index}`}
                        />
                    )}
                </S_Flex>

            </S_Container>
        </S_Questions>);
};


export const S_Questions = styled.section<{}>`
  background-color: ${({theme}) => theme.colors.white};
  ${sectionMargin};
  padding-inline: ${getResponsiveSize(5, 16 * 4, 320, 992)};
`
