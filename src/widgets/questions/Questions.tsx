import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';
import {useId, useState} from 'react';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {questionsData} from './questionsData';
import {FullQuestion} from './FullQuestion';
import {S_Flex} from '../../shared/styled/S_Flex';
import styled, {css} from 'styled-components';
import {sectionMargin, sectionPadding} from '../../app/styles/mixins';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {BASE} from '../../shared/constants/constants';


type props = {};
export const Questions = ({}: props) => {
    const [openIndex, setOpenIndex] = useState<string | null>(null)
    const id = useId()

    const toggleQuestion = (index: string) => {
        setOpenIndex(openIndex !== index ? index : null)
    };


    return (
        <S_Questions id = {"faq"} itemScope itemType="https://schema.org/FAQPage">

            <S_OuterContainer>

                <S_TitleContainer $isWithText = {true}>
                    <SectionTitle title = {"Вопросы"} text = {"Самые частые вопросы и ответы на них"}/>
                </S_TitleContainer>

                <S_Flex $direction = {'column'} $gap = {"1rem"}>
                    {questionsData.map((q, index) => <FullQuestion id = {`${id}-${index}`}
                                                                   key = {`${id}-${index}`}
                                                                   question = {q.question}
                                                                   answer = {q.answer}
                                                                   toggleQuestionCallback = {() => toggleQuestion(`${id}-${index}`)}
                                                                   isOpen = {openIndex === `${id}-${index}`}
                        />
                    )}
                </S_Flex>

            </S_OuterContainer>
        </S_Questions>);
};


export const S_Questions = styled.section<{}>`
  background-color: ${({theme}) => theme.colors.white};
  ${sectionMargin};
  ${sectionPadding};
  padding-inline: ${getResponsiveSize(5, 16 * 4, 320, 992)};
`

const S_TitleContainer = styled.div<{ $isWithText: boolean }>`
  margin-block: ${getResponsiveSize(BASE * 2, BASE * 4)};
  white-space: normal;

  p {
    font-size: 1rem;
    text-align: justify;
  }

  @media ${({theme}) => theme.mediaMinWidth.largeMobile} {
    display: flex;
    gap: 1rem;
    width: 100%;

    ${({$isWithText}) => $isWithText && css`
      border-left: 5px solid ${({theme}) => theme.colors.primary};
      align-items: center;

      @media ${({theme}) => theme.mediaMinWidth.tablet} {
        p {
          width: 50%;
        }
      }
    `}
  }
`;
