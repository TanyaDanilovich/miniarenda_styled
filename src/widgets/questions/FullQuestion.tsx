import styled, {css} from 'styled-components';
import {plainTransition} from '../../app/styles/mixins';
import {QuestionDropdownText} from './QuestionDropdownText.tsx';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {BASE} from '../../shared/constants/constants';


type props = {
    id: string,
    question: string,
    answer: string,
    toggleQuestionCallback: () => void,
    isOpen: boolean
}

export const FullQuestion = ({question, answer, toggleQuestionCallback, isOpen}: props) => {

    const onToggleQuestion = () => toggleQuestionCallback()
    const textSchemaOrg = {itemProp: "text"}

    const schemaOrg = {
        itemScope: true, itemProp: "acceptedAnswer", itemType: "https://schema.org/Answer"
    }

    return (
        <S_FullQuestion $isOpen = {isOpen} itemScope itemProp = "mainEntity" itemType = "https://schema.org/Question">

            <S_QuestionHeader onClick = {onToggleQuestion} itemProp = "name" $isOpen = {isOpen} >
                {question}
            </S_QuestionHeader>
            <QuestionDropdownText text = {answer} isOpen = {isOpen} schemaOrg = {schemaOrg}
                                  textSchemaOrg = {textSchemaOrg}/>
        </S_FullQuestion>);
};


export const S_FullQuestion = styled.div<{ $isOpen: boolean }>`
    
    border:1px solid ${({theme}) => theme.colors.gray};
`


const S_QuestionHeader = styled.button<{ $isOpen: boolean }>`
    position:relative;
    padding:${getResponsiveSize(BASE / 2, BASE * 2)};
    padding-left:4.5rem;
    cursor:pointer;
    flex-grow:1;
    display:flex;
    align-items:center;
    gap:12px;
    width:100%;
    background:transparent;
    border:0;
    text-align:left;
    ${plainTransition()};

    &:hover{
        background-color:${({theme}) => theme.colors.gainsboro};
    }

    &:before, &:after{
        position:absolute;
        top:50%;
        left:1.5rem;
        transform:translateY(-50%);
        display:inline-block;
        content:" ";
        width:1rem;
        height:1rem;
        background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="%23fd5d14"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>');
        background-position:center;
        background-repeat:no-repeat;
        opacity:1;
        ${plainTransition()};
    }

    &:after{
        transform: translateY(-50%) rotate(90deg);
    }

    ${({$isOpen}) => $isOpen && css`
        background-color:${({theme}) => theme.colors.gainsboro};

        &:after{
            transform: translateY(-50%) rotate(0deg);
        }
    `};

`