import {Container} from '../../shared/styled/Container';
import React, {useId} from 'react';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {S_Questions} from './S_Questions';
import {questionsData} from './questionsData';
import {FullQuestion} from './Question';
import {S_Flex} from '../../shared/styled/S_Flex';


type props = {};
export const Questions = ({}: props) => {

    const id = useId()

    return (
        <S_Questions>

            <Container>
                <SectionTitle title = {"Вопросы и ответы"} text = {''}/>

                <S_Flex $direction = {'column'} $gap = {"1rem"}>
                    {questionsData.map((q, index) =>
                        <FullQuestion key = {`${id}-${index}`}
                                      question = {q.question}
                                      answer = {q.answer}
                        />)}
                </S_Flex>

            </Container>
        </S_Questions>);
};


