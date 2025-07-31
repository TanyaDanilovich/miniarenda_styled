import React from 'react';
import {SchemaOrgData} from '../../shared/types/common.types';
import {S_DropdownText} from '../../shared/styled/S_DropdownText.ts';
import styled from 'styled-components';

type Props = { text: string, isOpen: boolean, schemaOrg?: SchemaOrgData, textSchemaOrg?: SchemaOrgData };
export const QuestionDropdownText = ({text, isOpen, schemaOrg, textSchemaOrg}: Props) => {

    const maxHeight = isOpen ? "24rem" : "0";
    const height = isOpen ? "100%" : "0"


    return (
        <S_QuestionDropdownText $maxHeight = {maxHeight} $height = {height}>
            <p {...textSchemaOrg}>
                {text}
            </p>
        </S_QuestionDropdownText>);
};


export const S_QuestionDropdownText = styled(S_DropdownText)<{}>`

`

