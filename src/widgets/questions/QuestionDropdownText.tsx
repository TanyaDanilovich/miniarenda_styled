
import {type SchemaOrgData} from '../../shared/types/common.types';
import {S_DropdownText} from '../../shared/styled/S_DropdownText.ts';
import styled from 'styled-components';

type Props = { text: string, isOpen: boolean, schemaOrg?: SchemaOrgData, textSchemaOrg?: SchemaOrgData };
export const QuestionDropdownText = ({text, isOpen, textSchemaOrg}: Props) => {

    const maxHeight = isOpen ? "24rem" : "0";
    const height = isOpen ? "100%" : "0"
    const padding = isOpen ? "1rem 1rem 1rem 3.5rem" : "0 1rem 0 3.5rem";

    return (
        <S_QuestionDropdownText $maxHeight = {maxHeight} $height = {height} $padding = {padding}>
            <p {...textSchemaOrg}>
                {text}
            </p>
        </S_QuestionDropdownText>);
};


export const S_QuestionDropdownText = styled(S_DropdownText)<{}>`

`

