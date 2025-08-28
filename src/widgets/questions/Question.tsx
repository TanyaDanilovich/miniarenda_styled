import styled from 'styled-components';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize.ts';
import {BASE} from '../../shared/constants/constants.ts';



export const Question = ({text}: { text: string }) => {


    return (
        <S_QuestionText itemProp = "name">
            {text}
        </S_QuestionText>)
}


export const S_QuestionText = styled.p<{}>`
    padding:${getResponsiveSize(BASE / 2, BASE * 2)};
    padding-left:1.5rem;
    cursor:pointer;
    flex-grow:1;
`

